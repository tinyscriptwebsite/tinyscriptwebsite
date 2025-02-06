const mongoose = require("mongoose");

let PortfolioItem;
try {
  PortfolioItem = mongoose.model("PortfolioItem");
} catch (error) {
  const portfolioItemSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    href: { type: String, required: true },
    description: { type: String, required: true },
  });
  PortfolioItem = mongoose.model("PortfolioItem", portfolioItemSchema);
}

module.exports = PortfolioItem;
