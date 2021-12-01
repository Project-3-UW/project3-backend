const express = require('express');
const sequelize = require("./config/connection.js")
var cors = require('cors')



const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors())
//DEPLOYED
app.use(cors({
    origin:["https://beeby.herokuapp.com"]
}))
const {User, UserImg, Item, ItemImg } = require('./models');
const routes = require("./controllers");

app.use(express.static("public"));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT);
    });
});