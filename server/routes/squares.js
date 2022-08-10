// Get all squares from date - to date for user
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Retrieve squares for user
  router.get("/", (req, res) => {
    const { id } = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
    db.Squares.findAll({
      where: {
        id: id,
      },
    }).then((squares) => {
      console.log(squares);
      res.send(`Square Life ◼️ squares...${squares}`);
    });
  });

  // Update squares
  router.put("/", (req, res) => {
    const { photo, username, email, password } = req.body;
    const { id } = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
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

  // Creates new square
  router.post("/", (req, res) => {
    const { id } = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }

    const { task_id, value, date } = req.body;

    //Add new square
    db.Squares.create({
      task_id: task_id,
      value: value,
      date: date,
    })
      .then((data) => {
        console.log("saved square");
        res.send(data);
      })
      .catch((err) => {
        console.log("failed here...", err);
        res.send(`${err}`);
      });
  });

  // Delete information
  router.delete("/", (req, res) => {
    const { id } = req.session.userId;
    if (!id) {
      res.send("Login to get details");
    }
    db.Users.destroy({
      where: {
        id: id,
      },
    }).then(() => {
      req.session.userId = null;
      req.session.photo = null;
      res.send("Square Life deleted");
    });
  });

  return router;
};
