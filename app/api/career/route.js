import connectDB from "../../../database/dbconfig";
import JobModel from "../../../model/Job";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    console.log("Fetching jobs...");
    await connectDB();
    const jobs = await JobModel.find();
    console.log("Jobs fetched successfully", jobs);
    return NextResponse.json({
      success: true,
      message: "Jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newJob = await JobModel.create(body);
    return NextResponse.json({
      success: true,
      message: "Job created successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { title, description, location, jobType, category, experience } =
      await req.json();
    const updatedJob = await JobModel.findByIdAndUpdate(
      id,
      { title, description, location, jobType, category, experience },
      { new: true }
    );
    if (!updatedJob) {
      return NextResponse.json({ error: "Job not found" });
    }
    return NextResponse.json({
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const deletedJob = await JobModel.findByIdAndDelete(id);
    if (!deletedJob) {
      return NextResponse.json({ success: false, message: "Job not found" });
    }
    return NextResponse.json({
      message: "Job deleted successfully",
      success: true,
      job: deletedJob,
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
