import connectDB from "../../../database/dbconfig";
import User from "../../../model/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const usersLength = await User.estimatedDocumentCount();
    console.log(usersLength);

    return NextResponse.json({ usersLength });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === "ERR_MISSING_ARGS") {
      console.error("Missing arguments for bcrypt hash function");
    }
    return NextResponse.json({ error: "Internal server error" });
  }
}
