'use strict';
module.exports = (sequelize, DataTypes) => {
  class Role extends sequelize.Sequelize.Model{}

  Role.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName : "Role"
  })

  Role.associate = function(models) {
    // associations can be defined here
    Role.hasOne(models.User)
  };
  return Role;
};