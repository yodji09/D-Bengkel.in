'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Service extends Model{}

  Service.init({
    service_name: DataTypes.STRING,
    price: DataTypes.INTEGER
  },
  {
    sequelize
  });
  Service.associate = function(models) {
    // associations can be defined here
    Service.belongsToMany(models.Vehicle, { through: "ServiceVehicle" });
  };
  return Service;
};