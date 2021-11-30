const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model { }

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull:false,
          trim: true
      }
},{
    sequelize
});

module.exports = Category;