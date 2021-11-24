const User = require("./User");
const Category = require("./Category");
const Item = require("./Item");

User.hasMany(Item,{
    onDelete: "CASCADE",
});

Item.belongsTo(User,{
    through: "UserId",
});

Item.hasMany(Category,{
    through: "categoryId",
});

Category.hasMany(Item,{
    through:"Id"
})

module.exports={
    User,
    Category,
    Item,
};