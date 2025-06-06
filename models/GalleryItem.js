import mongoose from "mongoose";

const GalleryItemSchema = new mongoose.Schema({
  title: String,
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.GalleryItem || mongoose.model("GalleryItem", GalleryItemSchema);
