"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Tasks", {
      fields: ["createdAt"],
      defaultValue: Sequelize.NOW,

      name: "createDefaultNow",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Tasks", "createDefaultNow");
  },
};
