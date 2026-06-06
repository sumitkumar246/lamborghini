import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    project: {
      type: String,
      default: "Tonino Lamborghini",
    },
    source: {
      type: String,
      default: "Contact Form",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Enquiry", enquirySchema);