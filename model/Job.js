const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Job title must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
    },
    location: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },
    jobType: {
      type: String,
      required: [true, "Job type is required"],
      enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance"],
    },
    category: {
      type: String,
      required: [true, "Job category is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Job || mongoose.model("Job", jobSchema);
