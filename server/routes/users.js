// Get user where email and password match

const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

module.exports = (db) => {
  // Retrieve information
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    db.Users.findOne({
      where: {
        id: id,
      },
    }).then((userData) => {
      const name = userData.username;
      res.send(`Square Life ◼️ users...${name}`);
    });
  });

  // Update information
  router.put("/:id/photo", (req, res) => {
    const { photo, username, email, password } = req.body;
    const { id } = req.params;

    if (photo) {
      db.Users.update(
        { photo_url: photo },
        {
          where: {
            id: id,
          },
        }
      );
    }

    if (username) {
      db.Users.update(
        { username: username },
        {
          where: {
            id: id,
          },
        }
      );
    }

    if (email) {
      db.Users.update(
        { email: email },
        {
          where: {
            id: id,
          },
        }
      );
    }

    if (password) {
      db.Users.update(
        { password: password },
        {
          where: {
            id: id,
          },
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
      password: password,
    })
      .then((data) => {
        console.log("saved");
        res.send(data);
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError") {
          res.send("User already exists", 400);
        } else {
          console.log(err);
          res.send(`${err}`);
        }
      });
  });

  // Delete information
  router.delete("/", (req, res) => {
    res.send("Square Life ◼️ users...");
  });

  return router;
};
