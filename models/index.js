const User = require("./User");
const UserImg = require("./UserImg");
const Item = require("./Item");
const ItemImg = require("./ItemImg");


User.hasMany(Item,{
    onDelete: "CASCADE",
});

Item.belongsTo(User);


User.hasOne(UserImg,{
    onDelete: "CASCADE",
});

UserImg.belongsTo(User);

ItemImg.belongsTo(Item);

Item.hasMany(ItemImg,{
    onDelete: "CASCADE"
})

module.exports={
    User,
    Item,
    ItemImg,
    UserImg,
};