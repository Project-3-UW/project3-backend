const router = require('express').Router();
const { ItemImg, User } = require("../../models");
const tokenAuth = require('../../middleware/tokenAuth');
const jwt = require('jsonwebtoken');

// get all user img urls
router.get("/", (req, res) => {
  console.log(req.user)
  ItemImg.findAll({
    include: [User]
  })
    .then(itemData => {
      res.json(itemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// get user img url by id
router.get("/:id", (req, res) => {
  ItemImg.findOne({
    where: {
      id:req.params.id},
      include: [User]
    })
  
    .then(singleItem => {
      if (singleItem) {
        res.json(singleItem);
      } else {
        res.status(404).json({ err: "no such item found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// create an img url for user
router.post("/", tokenAuth, (req, res) => {

  ItemImg.create(req.body)
    .then(newItem => {
      res.status(200).json(newItem);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// delete an item by id
router.delete("/:id", tokenAuth, (req, res) => {
  ItemImg.destroy({
    where: {
      id: req.params.id
    }
  }).then(delItem => {
    if (delItem) {
      console.log("item deleted")
      res.json(delItem);
    } else {
      res.status(404).json({ err: "no such item found!" });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
});

module.exports = router;