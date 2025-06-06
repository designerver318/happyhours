import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
}, { collection: 'admins', timestamps: true });

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);