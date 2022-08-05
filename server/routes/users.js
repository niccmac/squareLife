// Get user where email and password match

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Retrieve information
  router.get("/", (req, res) => {
    db.Users.get();
    res.send("Square Life ◼️ users...");
  });
  // Update information
  router.put("/", (req, res) => {
    res.send("Square Life ◼️ users...");
  });
  // Creates new information
  router.post("/", (req, res) => {
    res.send("Square Life ◼️ users...");
  });
  // Delete information
  router.delete("/", (req, res) => {
    res.send("Square Life ◼️ users...");
  });

  db.Users.create({
    email: "nicole.mac0404@gmail.com",
    username: "Nicole",
    password: "123",
  }).then(() => {
    console.log("saved");
  });
  return router;
};
