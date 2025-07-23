// util/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

let cachedConnection = null;

// Connection function using Mongoose with improved error handling
export async function connectToDatabase() {
  // If we have a cached connection and it's ready, use it
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  // Check if MongoDB URI is available
  if (!MONGODB_URI) {
    const error = new Error("MongoDB URI not found. Please set MONGODB_URI or NEXT_PUBLIC_MONGODB_URI in your environment variables.");
    console.error("MongoDB Connection Error:", error.message);
    throw error;
  }

  try {
    // Connect to the database with optimized settings
    const connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // Disable mongoose buffering
    });

    cachedConnection = connection;
    
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    
    // Provide more specific error messages
    if (error.message.includes('ENOTFOUND')) {
      throw new Error("Cannot connect to MongoDB: DNS resolution failed. Check your connection string.");
    } else if (error.message.includes('authentication failed')) {
      throw new Error("MongoDB authentication failed. Check your username and password.");
    } else if (error.message.includes('timeout')) {
      throw new Error("MongoDB connection timeout. The database server might be unavailable.");
    } else {
      throw new Error(`MongoDB connection failed: ${error.message}`);
    }
  }
}

// Graceful disconnection
export async function disconnectFromDatabase() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    cachedConnection = null;
    console.log("MongoDB disconnected");
  }
}
