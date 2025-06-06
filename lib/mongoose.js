import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "happyHoursDB", // <-- case-sensitive!
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected:", db.connection.name);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
}
