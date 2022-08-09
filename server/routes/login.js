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
      const userId = userData.id;
      const userPhoto = userData.photo_url;
      if (bcrypt.compareSync(password, userPassword)) {
        req.session.userId = userId;
        req.session.photo = userPhoto;

        res.send(`Square Life ◼️ loggedin`);
      } else {
        res.send(`Square Life ◼️ login fail`);
      }
    });
  });

  return router;
};
