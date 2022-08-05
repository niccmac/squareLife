"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Squares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Squares.hasOne(models.Tasks, {
        foreignKey: "id",
        as: "task_id",
      });
    }
  }
  Squares.init(
    {
      active: DataTypes.BOOLEAN,
      value: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Squares",
    }
  );
  return Squares;
};
