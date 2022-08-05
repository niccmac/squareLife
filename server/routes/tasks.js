// get all tasks for user
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.send("Tasks...");
  });
  return router;
};
