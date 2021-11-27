const seedUsers = require("./userSeeds")
const seedItems = require("./itemSeeds")
const seedUerImgs = require("./userImgSeeds")
const seedItemImgs = require("./itemImgSeeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SEEDED-----')
    await seedItems()
    console.log('\n-----ITEMS SEEDED-----')
    await seedUerImgs()
    console.log('\n-----USERIMGS SEEDED-----')
    await seedItemImgs()
    console.log('\n-----ITEMIMGS SEEDED-----')
    process.exit(0)
}

seedAll()