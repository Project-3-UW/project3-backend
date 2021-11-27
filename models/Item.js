const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  brand: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
  },
  ageRange: {
    type: DataTypes.STRING,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
});

module.exports = Item;