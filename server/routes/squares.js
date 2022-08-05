// Get all squares from date - to date for user
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.send("Squares...");
  });
  return router;
};
