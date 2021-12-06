// geolocation coodinates source: https://www.gps-coordinates.net/
const { User } = require("../models")

const userData = [
    {
        firstName: "Becky",
        lastName: "Newman",
        email: "becky@test.com",
        password: "password",
        longitude: "-122.30720894306641",
        latitude: "47.78535214214986",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Jen",
        lastName: "King",
        email: "Jen@test.com",
        password: "password",
        longitude: "-122.20407477941107",
        latitude: "47.7476104221209",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Lora",
        lastName: "Mason",
        email: "Lora@test.com",
        password: "password",
        longitude: "-122.13389960013073",
        latitude: "47.72166802586957",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Monica",
        lastName: "Geller",
        email: "Monica@test.com",
        password: "password",
        longitude: "-122.1834754141767",
        latitude: "47.656506896413376",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Recheal",
        lastName: "Green",
        email: "Recheal@test.com",
        password: "password",
        longitude: "-122.31270210712891",
        latitude: "47.613117340203374",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Anna",
        lastName: "Smith",
        email: "Anna@test.com",
        password: "password",
        longitude: "-122.31119147862982",
        latitude: "47.70405400890297",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Sharol",
        lastName: "Liu",
        email: "Sharol@test.com",
        password: "password",
        longitude: "-122.34318914253008",
        latitude: "47.79999839775707",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Lulu",
        lastName: "Harrison",
        email: "Lulu@test.com",
        password: "password",
        longitude: "-122.24939334101718",
        latitude: "47.72015519655019",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Branda",
        lastName: "Pott",
        email: "Branda@test.com",
        password: "password",
        longitude: "-122.26106631465",
        latitude: "47.670900430935376",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Ray",
        lastName: "Tress",
        email: "Ray@test.com",
        password: "password",
        longitude: "-122.38754642557096",
        latitude: "47.64751038039398",
        bio:"mom of 2 little girls"
    },
    {
        firstName: "Tami",
        lastName: "Baker",
        email: "Tami@test.com",
        password: "password",
        longitude: "-122.36300403716326",
        latitude: "47.72660789350837",
        bio:"mom of one boy and two girls"
    },
    {
        firstName: "Katie",
        lastName: "Baker",
        email: "Katie@test.com",
        password: "password",
        longitude: "-122.36300403716326",
        latitude: "47.72660789350837",
        bio:"mom of a 2 years old girl"
    },
    {
        firstName: "Marria",
        lastName: "Moller",
        email: "Marria@test.com",
        password: "password",
        longitude: "-122.03781622696391",
        latitude: "47.53694626238321",
        bio:"mom of a 4-year boy"
    },
    {
        firstName: "Amanda",
        lastName: "Page",
        email: "Amanda@test.com",
        password: "password",
        longitude: "-122.18087504743913",
        latitude: "47.505664676674",
        bio:"mom of a 4-year boy and a 2-year-old girl"
    },
    {
        firstName: "Yolanda",
        lastName: "Tang",
        email: "Yolanda@test.com",
        password: "password",
        longitude: "-122.36157466200628",
        latitude: "47.45600423904295",
        bio:"mom of a 5-year-old girl"
    },
    {
        firstName: "Ashley",
        lastName: "Yong",
        email: "Ashley@test.com",
        password: "password",
        longitude: "-122.4147005899172",
        latitude: "47.57596424455365",
        bio:"mom of a 5-year-old boy"
    },
    {
        firstName: "Jamie",
        lastName: "Brighton",
        email: "Jamie@test.com",
        password: "password",
        longitude: "-122.20219691462502",
        latitude: "47.974794872294545",
        bio:"mom of a 5-year-old boy and a golden retriver"
    },
    {
        firstName: "Mishelle",
        lastName: "High",
        email: "Mishelle@test.com",
        password: "password",
        longitude: "-122.09118040224341",
        latitude: "47.6875719476895",
        bio:"mom of a 3-year-old boy"
    },
    {
        firstName: "Alejandra",
        lastName: "Cotter",
        email: "Alejandra@test.com",
        password: "password",
        longitude: "-122.05270581506443",
        latitude: "47.6197808433588",
        bio:"mom of a 3-year-old boy"
    },
    {
        firstName: "Hannah",
        lastName: "Cooper",
        email: "Hannah@test.com",
        password: "password",
        longitude: "-122.23638333998133",
        latitude: "47.38465671514712",
        bio:"mom of a 3-year-old boy"
    },
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers