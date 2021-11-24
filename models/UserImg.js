// Table to store the URL of the user's profile image.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserImg extends Model {}

UserImg.init({
    url: {
        type: DataTypes.TEXT
    }
},
{
    sequelize,
    timestamps: false
})

module.exports=UserImg