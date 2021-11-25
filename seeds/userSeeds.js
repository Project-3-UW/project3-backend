const { User } = require("../models")

const userData = [
    {
        firstName: "Becky",
        lastName: "Newman",
        email: "becky@test.com",
        password: "password",
        kidDOB: "01/15/2018",
        longitude: "-122.30720894306641",
        latitude: "47.78535214214986",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Jen",
        lastName: "King",
        email: "Jen@test.com",
        password: "password",
        kidDOB: "05/12/2017",
        longitude: "-122.20407477941107",
        latitude: "47.7476104221209",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Lora",
        lastName: "Mason",
        email: "Lora@test.com",
        password: "password",
        kidDOB: "07/22/2019",
        longitude: "-122.13389960013073",
        latitude: "47.72166802586957",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Monica",
        lastName: "Geller",
        email: "Monica@test.com",
        password: "password",
        kidDOB: "11/11/2018",
        longitude: "-122.1834754141767",
        latitude: "47.656506896413376",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Recheal",
        lastName: "Green",
        email: "Recheal@test.com",
        password: "password",
        kidDOB: "01/2/2012",
        longitude: "-122.31270210712891",
        latitude: "47.613117340203374",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Anna",
        lastName: "Smith",
        email: "Anna@test.com",
        password: "password",
        kidDOB: "09/10/2015",
        longitude: "-122.31119147862982",
        latitude: "47.70405400890297",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Sharol",
        lastName: "Liu",
        email: "Sharol@test.com",
        password: "password",
        kidDOB: "07/12/2013",
        longitude: "-122.34318914253008",
        latitude: "47.79999839775707",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Lulu",
        lastName: "Harrison",
        email: "Lulu@test.com",
        password: "password",
        kidDOB: "08/12/2016",
        longitude: "-122.24939334101718",
        latitude: "47.72015519655019",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Branda",
        lastName: "Pott",
        email: "Branda@test.com",
        password: "password",
        kidDOB: "12/1/2012",
        longitude: "-122.26106631465",
        latitude: "47.670900430935376",
        bio:"mom with 2 little girls"
    },
    {
        firstName: "Ray",
        lastName: "Tress",
        email: "Ray@test.com",
        password: "password",
        kidDOB: "10/7/2009",
        longitude: "-122.38754642557096",
        latitude: "47.64751038039398",
        bio:"mom with 2 little girls"
    },
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers