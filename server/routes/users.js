// Get user where email and password match

const express = require("express");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const router = express.Router();

module.exports = (db, salt) => {
  // Retrieve information about user
  router.get("/", (req, res) => {
    const id = req.session.userId;
    if (!id) {
      res.send(`Login to get details ${id}`);
    }
    db.Users.findOne({
      where: {
        id: id
      }
    })
      .then((userData) => {
        const name = userData.username;
        res.send(`Square Life ◼️ users...${name}`);
      })
      .catch((err) => {
        console.log("failed to get", err);
      });
  });

  // Update information about user
  router.put("/", (req, res) => {
    const { photo, username, email, password } = req.body;
    const id = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
    if (photo) {
      db.Users.update(
        { photo_url: photo },
        {
          where: {
            id: id
          }
        }
      );
    }
    if (username) {
      db.Users.update(
        { username: username },
        {
          where: {
            id: id
          }
        }
      );
    }
    if (email) {
      db.Users.update(
        { email: email },
        {
          where: {
            id: id
          }
        }
      );
    }
    if (password) {
      db.Users.update(
        { password: password },
        {
          where: {
            id: id
          }
        }
      );
    }
    res.send(`Square Life ◼️ photo saved`);
  });

  // Creates new information
  router.post("/", (req, res) => {
    const { email, username, password } = req.body;

    //Register New User
    db.Users.create({
      email: email,
      username: username,
      password: bcrypt.hashSync(password, salt)
    })
      .then((data) => {
        console.log("saved");
        req.session.userId = data.id;
        res.send(data);
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError") {
          res.send("User already exists", 400);
        } else {
          console.log("failed here...", err);
          res.send(`${err}`);
        }
      });
  });

  // Delete information
  router.delete("/", (req, res) => {
    const id = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
    db.Users.destroy({
      where: {
        id: id
      }
    }).then(() => {
      req.session.userId = null;
      req.session.photo = null;
      res.send("Square Life deleted");
    });
  });

  return router;
};
