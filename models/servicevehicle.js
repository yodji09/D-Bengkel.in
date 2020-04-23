'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class ServiceVehicle extends Model{}

  ServiceVehicle.init({
    ServiceId: DataTypes.INTEGER,
    VehicleId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  },
  {
    sequelize
  });
  
  ServiceVehicle.associate = function(models) {
    // associations can be defined here
    ServiceVehicle.belongsTo(models.Service, { foreignKey: "ServiceId", targetKey: "id" });
    ServiceVehicle.belongsTo(models.Vehicle, { foreignKey: "VehicleId", targetKey: "id" });
  };
  return ServiceVehicle;
};