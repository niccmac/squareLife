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
      res.send(`Tasks for user...${tasks}`);
    });
  });

  router.post("/", (req, res) => {
    const id = req.session.userId;
    const { taskName, taskColour, taskUnit, taskHigh, taskLow } = req.body;
    db.Tasks.create({
      taskName: taskName,
      taskColour: taskColour,
      taskUnit: taskUnit,
      taskHigh: taskHigh,
      taskLow: taskLow,
    }).then((task) => {
      res.send(`Task created ${task.taskName}`);
    });
  });
  return router;
};
