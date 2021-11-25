const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init({
    email:{
      type: DataTypes.STRING,
      allowNull:false,
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
    firstName: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    bio: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    latitude: {
      type: DataTypes.FLOAT
    },
    kidDOB: {
      type: DataTypes.DATE
    }

    
},{
    hooks:{
        beforeCreate(newUser){
            newUser.password = bcrypt.hashSync(newUser.password,5);
            return newUser;
        },
        beforeUpdate(updatedUser){          
            updatedUser.password = bcrypt.hashSync(updatedUser.password,5);
            return updatedUser;
        },
    },
    sequelize,
});

module.exports = User;