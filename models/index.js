const User = require("./User");
const UserImg = require("./UserImg");
const Item = require("./Item");
const ItemImg = require("./ItemImg");
const Category = require("./Category");


User.hasMany(Item,{
    onDelete: "CASCADE",
});

Item.belongsTo(User);

// Item.hasMany(Category);

Category.hasMany(Item);

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