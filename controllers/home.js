// Dependencies
const express = require("express");

// Create Route
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.render("index.liquid");
});

// Export the Router
module.exports = router;