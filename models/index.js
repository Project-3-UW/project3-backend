const User = require("./User");
const Category = require("./Category");
const Item = require("./Item");

User.hasMany(Item,{
    onDelete: "CASCADE",
});

Item.belongsTo(User,{
    through: "UserId",
});

Item.belongsToMany(Category,{
    through: "categoryId",
});

Category.belongsToMany(Item,{
    through:"Id"
})

module.exports={
    User,
    Category,
    Item,
};