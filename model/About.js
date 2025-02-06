const mongoose = require("mongoose");

let AboutPage;
try {
  AboutPage = mongoose.model("AboutPage");
} catch (error) {
  const aboutpageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    title2: { type: String, required: true },
    description2a: { type: String, required: true },
    description2b: { type: String, required: true },
  });
  AboutPage = mongoose.model("AboutPage", aboutpageSchema);
}

module.exports = AboutPage;
