// get all tasks for user
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const id = req.session.userId;
    db.Tasks.findAll({
      where: {
        user_id: id,
      },
    }).then((tasks) => {
      res.send(`${tasks}`);
    });
  });

  router.post("/", (req, res) => {
    console.log(req.session.userId);
    const { taskName, taskColour, taskUnit, taskHigh, taskLow } = req.body;
    const userInfo = {
      user_id: req.session.userId,
      taskName: taskName,
      taskColour: taskColour,
      taskUnit: taskUnit,
      taskHigh: taskHigh,
      taskLow: taskLow,
      active: true,
    };
    console.log(userInfo);
    if (userInfo.user_id) {
      db.Tasks.create({ userInfo })
        .then((task) => {
          res.send(`Task created ${task.taskName}`);
        })
        .catch((err) => {
          res.send(`DB error ${err}`);
        });
    }
  });
  return router;
};
