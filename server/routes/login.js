// Get user where email and password match

const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

module.exports = (db, salt, hash) => {
  // Login
  router.get("/", (req, res) => {
    const { email, password } = req.body;
    db.Users.findOne({
      where: {
        email: email,
      },
    }).then((userData) => {
      const userPassword = userData.password;
      if (bcrypt.compareSync(password, userPassword)) {
        res.send(`Square Life ◼️ loggedin`);
      } else {
        res.send(`Square Life ◼️ login fail`);
      }
    });
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

  // db.Users.create({
  //   email: "nicole.mac0404@gmail.com",
  //   username: "Nicole",
  //   password: "123",
  // }).then(() => {
  //   console.log("saved");
  // });
  return router;
};
