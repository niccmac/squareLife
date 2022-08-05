"use strict";
const { Model } = require("sequelize");
//const Users = require("./users");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tasks.hasOne(models.Users, {
        foreignKey: "id",
        as: "user_id",
      });
    }
  }
  Tasks.init(
    {
      taskName: DataTypes.STRING,
      taskColour: DataTypes.STRING,
      taskUnit: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      taskHigh: DataTypes.NUMBER,
      taskLow: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Tasks",
    }
  );
  return Tasks;
};
