'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    Last_name: DataTypes.STRING,
    Birthdate: DataTypes.DATE,
    password : DataTypes.STRING,
    Email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    money: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};