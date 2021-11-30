const router = require('express').Router();
const { Item, Category, User } = require("../../models");


// get all categories
router.get("/", (req, res) => {
  Category.findAll({
  include:[Item]
  })
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// get an category by id
router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then(singleCategory => {
      if (singleCategory) {
        res.json(singleCategory);
      } else {
        res.status(404).json({ err: "no such category found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;
