const router = require('express').Router();
const { Item, User } = require("../../models");
const tokenQuery = require('../../middleware/tokenAuth');
const calculateDistance = require('../../utils/distanceUtil');
const tokenAuth = require('../../middleware/tokenAuth');
// default setting 5 miles as the distance
const nearbyDistance = 5


// get all items by distance of current user
// use tokenQuery to validate user login
router.get("/nearby", tokenQuery, async (req, res) => {
    // initialize lon and lat for query
    let lon;
    let lat;
    // if user not logged in, use location from front end -- front end need to prompt location
    if(req.guest && req.query.lon && req.query.lat) {
        lon = req.query.lon;
        lat = req.query.lat
    // if user logged in, use location from user info
    } else if(req.user) {
        const user = await User.findByPk(req.user.id)
        lon = user.longitude;
        lat = user.latitude
    // if neither is provided, return error
    } else {
      res.status(500).json({message: "has to provide user token or lon/lat value" });
      return
    }

    Item.findAll({
        include: [{ 
            model: User,
            attributes: { exclude: ['password'] },
        }]
    })
      .then(itemData => {
        // filter by distance
        let nearbyItems = itemData.filter((item) => {
            return calculateDistance(parseFloat(lon), parseFloat(lat), item.User.longitude, item.User.latitude) < nearbyDistance
        })
        // if there is no item in filtered distance, return all items, front end needs to show no nearby items found sign, instead we show all available items
        if(nearbyItems.length === 0) {
            res.json({
                items: itemData,
                total: itemData.length,
                nearby: false
            });
        // return filtered items and total item numbers
        } else {
            res.json({
                items: nearbyItems,
                total: nearbyItems.length,
                nearby: true
            });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });

  router.get("/validateToken", tokenAuth, (req,res) => {
    User.findByPk(req.user.id).then(foundUser=>{
        res.json(foundUser)
      })
  })

  module.exports = router;