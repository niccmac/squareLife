"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Users", {
      fields: ["email"],
      type: "UNIQUE",

      name: "emailUnique",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Users", "emailUnique");
  },
};
