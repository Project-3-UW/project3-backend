const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require('jsonwebtoken');
const tokenAuth = require('../../middleware/tokenAuth');
const { User, Item, ItemImg, UserImg } = require('../../models');
const nodemailer = require('nodemailer')

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
router.get("/:id", tokenAuth, (req,res)=>{
  User.findByPk(req.params.id, {
    include: [UserImg, {model: Item,
      include: [{
        model: ItemImg
      }]
    }]
  })
.then(findUser => {
  
  let activeList=[], pendingList=[], giftedList=[];

  findUser.Items.forEach((item)=>{
    if(item.status === "gifted") {
        giftedList.push(item)
    } else if(item.status === "pending") {
        pendingList.push(item)
    } else {
        activeList.push(item)
    }
})

  let userData = findUser;
  userData.Items = activeList;
  res.json({
    findUser:findUser,
    activeList:activeList,
    pendingList:pendingList,
    giftedList:giftedList,
});
})
.catch(err => {
  console.log(err);
  res.status(500).json({ err });
});
});


// update an item's info
router.put("/:id", tokenAuth, (req, res) => {
  User.update(req.body,
  {
    where: {
      id: req.params.id
    }
  })
  .then(newItem => {
    console.log("item updated")
    res.status(200).json(newItem);
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
        UserImg.create({
          url: req.body.userImg,
          UserId: newUser.id
        })
        // res.json(newUser);
      })
      .then(newUser => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'beebycontact@gmail.com',
                pass: 'Project3'
            }
        });
        let mailOptions = {
            from: 'beebycontact@gmail.com',
            to: req.body.email,
            subject: `Welcome to BeeBy, ${req.body.firstName}!`,
          text: `Welcome to the BeeBy community! 
          
Here you will be able to find new/used clothes and items for your child, or post your old ones to give away. You can filter by location, condition, type and age so that you can easily find what you are looking for. If you click the "I want it!!" button, an email will be generated to the person who uploaded the item, just press send! If you can't find what you are looking for, checkout the coupons page to shop local. The resources page will have any advice or hotlines you need. 
          
          Happy swapping! 
          
          -The BeeBy Team`
        };
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('email sent')
            }
      })
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
      email: req.body.email,
    
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

router.get("/:id/location", tokenAuth, (req,res)=>{
  User.findByPk(req.params.id,{
      attributes: { exclude: ['id', 'createdAt','updatedAt','firstName','lastName','email','password','image','bio','kidDOB'] }})
.then(findUser => {
  res.json(findUser),
  // res.json(findUser.longitude)
  console.log(findUser.latitude, findUser.latitude)
  // console.log(findUser.longitude);
})
.catch(err => {
  console.log(err);
  res.status(500).json({ err });
});
});

router.post("/profile", tokenAuth, (req, res) => {
 User.findByPk(req.user.id).then(foundUser=>{
   res.json(foundUser);
 })
});

router.get("/:id/location", tokenAuth, (req,res)=>{
  User.findByPk(req.params.id,{
      attributes: { exclude: ['id', 'createdAt','updatedAt','firstName','lastName','email','password','image','bio','kidDOB'] }})
.then(findUser => {
  res.json(findUser),
  // res.json(findUser.longitude)
  console.log(findUser.latitude, findUser.latitude)
  // console.log(findUser.longitude);
})
.catch(err => {
  console.log(err);
  res.status(500).json({ err });
});
});

router.get("/validateToken", tokenAuth, (req,res) => {
  res.send("valid token")
})

module.exports = router;