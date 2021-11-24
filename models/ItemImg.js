// Table to store the URLs of the item's images.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ItemImg extends Model {}

ItemImg.init({
    url: {
        type: DataTypes.TEXT
    }
},
{
    sequelize,
    timestamps: false
})

module.exports=ItemImg