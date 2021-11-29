const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/users",userRoutes);

const itemRoutes = require("./itemRoutes");
router.use("/items",itemRoutes);

const queryRoutes = require("./queryRoutes");
router.use("/query",queryRoutes);


// const categoryRoutes = require("./categoryRoutes");
// router.use("/categories",categoryRoutes);


module.exports = router;