'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Vehicle extends Model{}

  Vehicle.init({
    vehicle_brand: DataTypes.STRING,
    vehicle_type: DataTypes.STRING,
    UserId:DataTypes.INTEGER
  },
  {
    sequelize
  });

  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.belongsTo(models.User);
    Vehicle.belongsToMany(models.Service, { through: "ServiceVehicle" });
  };
  return Vehicle;
};