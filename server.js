const express = require('express');
const sequelize = require("./config/connection.js")
var cors = require('cors')

// const session = require("express-session");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require("cors");



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

const {User, UserImg, Item, ItemImg } = require('./models');
const routes = require("./controllers");
app.use(cors())
app.use(express.static("public"));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { 
//         maxAge: 1000 * 60 * 60 * 2
//      },
//      store: new SequelizeStore({
//         db:sequelize
//      })
//   }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT);
    });
});