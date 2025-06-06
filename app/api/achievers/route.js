import dbConnect from "@/lib/mongoose";
import Achiever from "@/models/Achiever";

export async function GET() {
  await dbConnect();
  const data = await Achiever.find().sort({ date: -1 });
  return Response.json(data);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const newAchiever = await Achiever.create(body);
  return Response.json(newAchiever);
}