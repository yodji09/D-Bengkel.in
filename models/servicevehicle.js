'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceVehicle = sequelize.define('ServiceVehicle', {
    ServiceId: DataTypes.INTEGER,
    VehicleId: DataTypes.INTEGER
  }, {});
  ServiceVehicle.associate = function(models) {
    // associations can be defined here
  };
  return ServiceVehicle;
};