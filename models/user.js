'use strict';
const Convert = require('../helpers/convertRupiah')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{
    fullname(){
      return this.first_name + ' ' + this.last_name
    }
    getRupiah(){
      return Convert(this.money)
    }
  }
  User.init({
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [3, 100]
      }
    },
    last_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [3, 100]
      }
    },
    username : {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        notEmpty : true,
        len : [5, 20]
      }
    },
    birthdate: {
      type : DataTypes.DATEONLY,
      validate : {
        notEmpty : true
      }
    },
    email: {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : true
      }
    },
    phone_number: {
      type : DataTypes.STRING,
      len : [10, 15]
    },
    money: DataTypes.INTEGER,
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [8, 50]
      }
    },
    RoleId : {
      type : DataTypes.INTEGER,
      references : {
        model : "Roles",
        key : "id"
      },
      onDelete : "cascade",
      onUpdate : "cascade"
    }
  },{
    hooks : {
      beforeCreate : (user) => {
        user.RoleId = 1
      }
    },
    sequelize, 
    modelName:"User"
  })

  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role)
    User.hasMany(models.Vehicle);
  };
  return User;
};