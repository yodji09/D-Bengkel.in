'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    service_name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};