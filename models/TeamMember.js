import mongoose from "mongoose";

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  position: String,
  photo: String,
});

export default mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);
