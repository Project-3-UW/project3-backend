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

// update an item's status to pending/available/gifted
router.put("/:status/:id", tokenAuth, (req, res) => {
  if(["pending","available","gifted"].includes(req.params.status.toLowerCase())){
      Item.update(
    {
      status: req.params.status
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(newItem => {
      console.log("item status updated")
      res.status(200).json(newItem);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  } else {
    res.status(500).json({ err });
  }
});

// update an item's info
router.put("/:id", tokenAuth, (req, res) => {
    Item.update(req.body,
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



// delete an item by id
router.delete("/:id", tokenAuth, (req, res) => {
  Item.destroy({
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