// util/mongodb.js
import mongoose from "mongoose";

// MongoDB connection URI (use environment variable for security)

// Connection function using Mongoose
export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  // Connect to the database
  await mongoose.connect(MONGODB_URI || NEXT_PUBLIC_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
}
