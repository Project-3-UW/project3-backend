const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init({
    email:{
      type: DataTypes.STRING,
      unique:true,
      validate:{
          isEmail:true
      }
    },
    password:{
        type: DataTypes.STRING,
        validate:{
            len:[8]
        }
    },
    image:{
      type: DataTypes.STRING,
      unique:true,
      allowNull:true,
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    latitude: {
      type: DataTypes.FLOAT
    }
    
},{
    hooks:{
        beforeCreate(newUser){
            newUser.username = newUser.username.toLowerCase();
            newUser.password = bcrypt.hashSync(newUser.password,5);
            return newUser;
        },
        beforeUpdate(updatedUser){
            updatedUser.username = updatedUser.username.toLowerCase();
            updatedUser.password = bcrypt.hashSync(updatedUser.password,5);
            return updatedUser;
        },
    },
    sequelize,
});

module.exports = User;