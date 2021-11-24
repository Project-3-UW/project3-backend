const User = require("./User");
const UserImg = require("./UserImg");
const Item = require("./Item");
const ItemImg = require("./ItemImg");
const Category = require("./Category");


User.hasMany(Item,{
    onDelete: "CASCADE",
});

Item.belongsTo(User,{
    // maybe don't need this because the sequelize with add fk auto
    through: "UserId",
});

Item.hasMany(Category,{
    // maybe don't need this because the sequelize with add fk auto
    through: "categoryId",
});

Category.hasMany(Item,{
    // maybe don't need this because the sequelize with add fk auto
    through:"Id"
});

User.hasOne(UserImg,{
    onDelete: "CASCADE",
});

UserImg.belongsTo(User);

Item.hasMany(ItemImg, {
    onDelete: "CASCADE",
});

ItemImg.belongsTo(Item)

module.exports={
    User,
    Category,
    Item,
    ItemImg,
    UserImg,
};