const mongoose = require("mongoose");

// Check if the model is already defined
let TsUser;
try {
  // Attempt to retrieve the existing model
  TsUser = mongoose.model("TsUser");
} catch (error) {
  // If the model is not defined, define it
  const tsuserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  });

  // Create and export the User model
  TsUser = mongoose.model("TsUser", tsuserSchema);
}

module.exports = TsUser;
