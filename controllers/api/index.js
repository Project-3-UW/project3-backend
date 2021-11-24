const router = require('express').Router();
const itemRoutes = require("./item-routes");

router.use("/items", itemRoutes)

module.exports = router;