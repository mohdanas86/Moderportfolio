// app/api/contact/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../util/mongodb";
import Contact from "@/models/Contact";

// Input validation function
function validateContactData(data) {
  const { name, email, message } = data;
  
  if (!name || name.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long" };
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { isValid: false, error: "Please provide a valid email address" };
  }
  
  if (!message || message.trim().length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters long" };
  }
  
  return { isValid: true };
}

// Rate limiting helper (simple in-memory store)
const requestTimestamps = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = requestTimestamps.get(ip) || [];
  
  // Remove timestamps older than 1 hour
  const recentTimestamps = timestamps.filter(timestamp => now - timestamp < 3600000);
  
  // Allow max 5 requests per hour per IP
  if (recentTimestamps.length >= 5) {
    return true;
  }
  
  recentTimestamps.push(now);
  requestTimestamps.set(ip, recentTimestamps);
  return false;
}

export async function POST(req) {
  try {
    console.log('Contact API: Starting request processing...');
    
    // Parse request body first
    let body;
    try {
      body = await req.json();
      console.log('Contact API: Request body parsed successfully', body);
    } catch (parseError) {
      console.error('Contact API: JSON parsing error:', parseError);
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    console.log('Contact API: Client IP:', clientIP);
    
    // Check rate limiting
    if (isRateLimited(clientIP)) {
      console.log('Contact API: Rate limited for IP:', clientIP);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate request data
    const validation = validateContactData(body);
    if (!validation.isValid) {
      console.log('Contact API: Validation failed:', validation.error);
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, message } = body;
    console.log('Contact API: Data validated successfully');

    // Sanitize input data
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    // Try to connect to MongoDB
    try {
      console.log('Contact API: Attempting MongoDB connection...');
      await connectToDatabase();
      console.log('Contact API: MongoDB connected successfully');
    } catch (dbError) {
      console.error('Contact API: MongoDB connection failed:', dbError);
      return NextResponse.json(
        { error: "Database connection failed. Please try again later." },
        { status: 503 }
      );
    }

    // Check for duplicate submissions (simplified check)
    try {
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const existingContact = await Contact.findOne({
        email: sanitizedData.email,
        message: sanitizedData.message,
        createdAt: { $gte: twentyFourHoursAgo }
      });

      if (existingContact) {
        console.log('Contact API: Duplicate submission detected');
        return NextResponse.json(
          { error: "Duplicate submission detected. Please wait before sending the same message again." },
          { status: 409 }
        );
      }
    } catch (duplicateCheckError) {
      console.error('Contact API: Duplicate check failed:', duplicateCheckError);
      // Continue without duplicate check if it fails
    }

    // Create new contact document
    try {
      const newContact = new Contact({
        ...sanitizedData,
        ipAddress: clientIP,
        userAgent: req.headers.get('user-agent') || 'unknown',
      });

      console.log('Contact API: Creating new contact document...');
      const savedContact = await newContact.save();
      console.log('Contact API: Contact saved successfully:', savedContact._id);

      // Return success response
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully. I'll get back to you soon!",
        contactId: savedContact._id,
      }, { status: 200 });

    } catch (saveError) {
      console.error('Contact API: Save error:', saveError);
      return NextResponse.json(
        { error: "Failed to save your message. Please try again." },
        { status: 500 }
      );
    }

  } catch (err) {
    console.error('Contact API: Unexpected error:', err);
    console.error('Contact API: Error stack:', err.stack);
    
    // Return generic error message to client
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
