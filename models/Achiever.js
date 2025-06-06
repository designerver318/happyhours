import mongoose from "mongoose";

const AchieverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    image: { type: String, trim: true },
    date: { type: Date, default: Date.now },
    result: { type: String, trim: true },
    subject: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.Achiever || mongoose.model("Achiever", AchieverSchema);
