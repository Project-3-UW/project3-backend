const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require('../../models')

// get all users
router.get("/", (req,res)=>{
  User.findAll()
.then(findUser => {
  res.json(findUser);
})
.catch(err => {
  console.log(err);
  res.status(500).json({ err });
});
});

// get user by id
router.get("/:id", (req,res)=>{
  User.findAll({
    where: {
      id:req.params.id
    }
  })
.then(findUser => {
  res.json(findUser);
})
.catch(err => {
  console.log(err);
  res.status(500).json({ err });
});
});

// adds new user
router.post("/signup", (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
    })
      .then(newUser => {
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });

  
// login route with tokens
  

module.exports = router;