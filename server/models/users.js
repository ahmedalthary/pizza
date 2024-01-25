"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The username can't be null." },
          notEmpty: { msg: "The username can't be an empty." },
        },
      },
      Email: {
        type: DataTypes.STRING,
        unique: { msg: "This email already in use." },
        allowNull: false,
        validate: {
          notNull: { msg: "The email can't be null." },
          isEmail: { msg: "Please provide a valid email address." },
          notEmpty: { msg: "The email can't be an empty." },
        },
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The password can't be null." },
          notEmpty: { msg: "The password can't be an empty." },
          is: {
            args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{8,}$/,
            msg: "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one number.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
