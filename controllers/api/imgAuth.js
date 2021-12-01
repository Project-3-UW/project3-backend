const router = require("express").Router();
const ImageKit = require('imagekit');
// const dotenv =require('dotenv'):

const imagekit = new ImageKit({
  urlEndpoint: process.env.URL_ENDPOINT,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});

router.get('/', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
  });