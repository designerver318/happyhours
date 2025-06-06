import mongoose from "mongoose";

const AchieverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  result: String,    // Result of the achiever, e.g., "Distinction"
  subject: String,   // Subject they achieved in, e.g., "Mathematics"
});

export default mongoose.models.Achiever || mongoose.model("Achiever", AchieverSchema);
