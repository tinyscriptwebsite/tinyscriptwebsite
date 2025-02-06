import bcrypt from "bcryptjs";
import connectDB from "../../../../database/dbconfig";
import User from "../../../../model/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    await connectDB();
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === "ERR_MISSING_ARGS") {
      console.error("Missing arguments for bcrypt hash function");
    }
    return NextResponse.json({ error: "Internal server error" });
  }
}
