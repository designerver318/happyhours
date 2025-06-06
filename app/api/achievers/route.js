import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Achiever from "@/models/Achiever";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const achievers = await Achiever.find().sort({ createdAt: -1 });
    return NextResponse.json(achievers);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const achiever = await Achiever.create(body);
    return NextResponse.json({ success: true, data: achiever }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
