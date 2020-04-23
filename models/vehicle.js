'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicle_brand: DataTypes.STRING,
    vehicle_type: DataTypes.STRING,
    UserId:DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.belongsTo(models.User);
  };
  return Vehicle;
};