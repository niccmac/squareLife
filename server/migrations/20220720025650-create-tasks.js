"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      taskName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      taskColour: {
        type: Sequelize.STRING,
        default: "Green",
      },
      taskUnit: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      taskHigh: {
        type: Sequelize.INTEGER,
        default: 10,
      },
      taskLow: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tasks");
  },
};
