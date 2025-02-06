const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...", process.env.DATABASE_URI);
    const uri = process.env.DATABASE_URI;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
