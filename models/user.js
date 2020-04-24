'use strict';
const {transporter, mailOptions} = require('../helpers/nodemailer')
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
      },
      afterCreate : (user) => {
        mailOptions.to = user.email
        mailOptions.subject = "Succes Create Account"
        mailOptions.text = `Succes Creating new account with username : ${user.username} and password : ${user.password}`
        transporter.sendMail(mailOptions, (error, info)=>{
          if (error){
            throw new Error("Invalid email")
          }
        })
      },
      afterUpdate : (user) => {
        mailOptions.to = user.email
        mailOptions.subject = "There Was A change On Your Account"
        mailOptions.text = `Your Account Info has been Change recently, if it wasn't you, please follow this link ex: xxxxxxxxx to rechange your account`
        transporter.sendMail(mailOptions, (error, info)=>{
          if (error){
            throw new Error("Invalid email")
          }
        })
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