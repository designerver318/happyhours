import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Announcement || mongoose.model("Announcement", AnnouncementSchema);
