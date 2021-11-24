const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init({
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
  },
  picture:{
      type: DataTypes.STRING
  },
  description:{
      type: DataTypes.STRING,
  },
  date:{
      type: DataTypes.DATE,
      unique:true,
  },
  UserId:{
      type: DataTypes.INTEGER,
      allowNull:false
  },
  CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  }
},{
    sequelize, 
});

module.exports = Items;