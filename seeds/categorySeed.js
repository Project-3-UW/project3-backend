const { Category } = require("../models")

const categoryData = [

    {
        name:"Shirts"
    },
    {
        name:"Shoes"
    },
    {
        name:"Pants"
    },
    {
        name:"Bibs"
    },
    {
        name:"Crib"
    },
    {
        name:"Bottles"
    }
]
    const seedCategory = () => Category.bulkCreate(categoryData)

    module.exports = seedCategory