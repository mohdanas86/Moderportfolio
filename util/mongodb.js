// util/mongodb.js
import mongoose from "mongoose";

// MongoDB connection URI (use environment variable for security)
const MONGODB_URI =
  "mongodb+srv://anas:anas@food.t6wubmw.mongodb.net/portfolio?retryWrites=true&w=majority&appName=food";

// Connection function using Mongoose
export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  // Connect to the database
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
}
