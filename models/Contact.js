import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"]
    },
    email: { 
      type: String, 
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"]
    },
    message: { 
      type: String, 
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [2000, "Message cannot exceed 2000 characters"]
    },
    ipAddress: {
      type: String,
      default: "unknown"
    },
    userAgent: {
      type: String,
      default: "unknown"
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new"
    },
    isSpam: {
      type: Boolean,
      default: false
    }
  },
  { 
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        // Remove sensitive fields when converting to JSON
        delete ret.ipAddress;
        delete ret.userAgent;
        delete ret.__v;
        return ret;
      }
    }
  }
);

// Index for faster queries
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
