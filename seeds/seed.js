const sequelize = require("../config/connection");
const {User, Category} = require("../models");
const userData = require("./user.json");
const categoryData = require("./category.json")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate(userData,{individualHooks:true});
    console.log('seeded users!')
    const categories = await Category.bulkCreate(categoryData);
    console.log('seeded categories!')
   
    process.exit(0);
}


seed();