import dbConnect from "@/lib/mongoose";
import Achiever from "@/models/Achiever";

export async function PUT(req, { params }) {
  await dbConnect();
  const data = await req.json();
  const updated = await Achiever.findByIdAndUpdate(params.id, data, { new: true });
  return Response.json(updated);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  await Achiever.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}
