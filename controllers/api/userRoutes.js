const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require('jsonwebtoken');
const tokenAuth = require('../../middleware/tokenAuth');
const { User, UserImg } = require('../../models');

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

// get user by id --- not with tokens
router.get("/:id", (req,res)=>{
  User.findByPk(req.params.id)
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
      kidDOB: req.body.kidDOB
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
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(foundUser => {
        if(!foundUser){
            res.status(401).send("incorrect email or password")
        }
        else if(bcrypt.compareSync(req.body.password,foundUser.password)){
            const token = jwt.sign({
              email:foundUser.email,
              id:foundUser.id
            },
            process.env.JWT_SECRET
            ,{
              expiresIn:"2h"
            })
            console.log("login success")
            console.log(token)
            res.json({
              token:token,
              user:foundUser
            });
        }
        else {
            res.status(401).send("incorrect email or password")
        }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;