const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/users",userRoutes);

const itemRoutes = require("./itemRoutes");
router.use("/items",itemRoutes);

const queryRoutes = require("./queryRoutes");
router.use("/query",queryRoutes);

// const emailRoutes = require("./emailRoutes");
// router.use("/email",emailRoutes);

const imageIRoutes = require("./imgIRoutes");
router.use("/itemimg",imageIRoutes)

const imageURoutes = require("./imgURoutes");
router.use("/userimg",imageURoutes)

module.exports = router;