const { Item } = require("../models")

const itemData = [
    {
        title:"new born baby clothing",
        category: "Clothing, Shoes & Accessories",
        condition: "Used (like new)",
        brand: "Gap",
        model: "n/a",
        ageRange: "0-3m",
        description: "10 cute baby girl one-piece",
        UserId:3
    }
]

const seedItems = () => Item.bulkCreate(itemData)

module.exports = seedItems