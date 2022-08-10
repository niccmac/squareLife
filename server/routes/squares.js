// Get all squares from date - to date for user
const express = require("express");
const router = express.Router();

module.exports = (db, salt) => {
  // Retrieve squares for user
  router.get("/", (req, res) => {
    const id = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
    db.Squares.findAll({
      where: {
        id: id
      }
    }).then((userData) => {
      const squares = userData.username;
      res.send(`Square Life ◼️ squares...${squares}`);
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
    const { task_id, value, date } = req.body;

    //Register New User
    db.Squares.create({
      task_id: task_id,
      value: value,
      date: date
    })
      .then((data) => {
        console.log("saved square");
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
