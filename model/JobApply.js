const mongoose = require("mongoose");

let JobApplicationModel;
try {
  JobApplicationModel = mongoose.model("JobApplication");
} catch (error) {
  const jobApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true },
  });
  JobApplicationModel = mongoose.model("JobApplication", jobApplicationSchema);
}

module.exports = JobApplicationModel;
