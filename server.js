const express = require('express');
const sequelize = require("./config/connection.js")
const cors = require('cors')
const ImageKit = require('imagekit');
const dotenv =require('dotenv');


const imagekit = new ImageKit({
  urlEndpoint: process.env.URL_ENDPOINT,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
//DEPLOYED
// app.use(cors({
//     origin:["https://beeby.herokuapp.com"]
// }))
const {User, UserImg, Item, ItemImg } = require('./models');
const routes = require("./controllers");

app.use(express.static("public"));

app.get('/auth', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT);
    });
});