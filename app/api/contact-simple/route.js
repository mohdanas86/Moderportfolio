// app/api/contact-simple/route.js
import { NextResponse } from "next/server";

// Simple rate limiting in memory
const requests = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < 60000); // 1 minute window
  
  if (recentRequests.length >= 3) {
    return true;
  }
  
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  return false;
}

export async function POST(req) {
  try {
    console.log('Simple Contact API: Request received');
    
    // Get client IP
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Basic rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }
    
    // Parse request body
    const { name, email, message } = await req.json();
    
    // Basic validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long" },
        { status: 400 }
      );
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }
    
    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }
    
    // Log the contact (in production, you might want to send email or save to file)
    console.log('Contact Form Submission:', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: clientIP
    });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    });
    
  } catch (error) {
    console.error('Simple Contact API Error:', error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
