const router = require('express').Router();
const { Item } = require("../../models");
const tokenAuth = require('../../middleware/tokenAuth');
const jwt = require('jsonwebtoken');

// get all items
router.get("/", (req, res) => {
  Item.findAll()
    .then(itemData => {
      res.json(itemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// get an item by id
router.get("/:id", (req, res) => {
  Item.findByPk(req.params.id)
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

// create an item
router.post("/", tokenAuth, (req, res) => {
  
  Item.create(req.body)
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
  if (!req.session.user) {
    return res.status(403).json({ err: "please login first" });
  }
  Post.findByPk(req.params.id).then(foundPost => {
    if (req.session.user.id !== foundPost.UserId) {
      return res.status(403).json({ err: "not your comment!" });
    }
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(delPost => {
        if (delPost) {
          res.json(delPost);
        } else {
          res.status(404).json({ err: "no such comment found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });;
});

module.exports = router;