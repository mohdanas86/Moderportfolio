import { connectToDatabase } from "../../../util/mongodb"; // Path to your connection file
// app/api/contact/route.js
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";

export async function GET(req) {
  try {
    // Example logic (use actual dynamic split logic)
    console.log("Dynamically split based on paragraphs or headings : ");

    // Simulating enrichedOutput (replace with your actual data)
    const enrichedOutput = "Some enriched data here";

    console.log("after metadata : ", enrichedOutput);

    // Return the enriched output as JSON response
    return NextResponse.json({ result: enrichedOutput });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Parsing request body
    const { email, name, message } = await req.json();

    // Connect to MongoDB using Mongoose
    await connectToDatabase(); // Ensure Mongoose connection is established

    // Create a new Contact document using the Mongoose model
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact data to the database
    await newContact.save();

    // Return a success response with the inserted data
    return NextResponse.json({
      result: "Data inserted successfully",
      contact: newContact, // Returning the newly created contact object
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
