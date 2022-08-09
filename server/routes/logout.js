// Get user where email and password match

const express = require("express");
const router = express.Router();

module.exports = () => {
  // Logout
  router.get("/", (req, res) => {
    req.session.userId = null;
    req.session.photo = null;
    res.send("Logout complete");
  });

  return router;
};
