const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/users",userRoutes);

const itemRoutes = require("./itemRoutes");
router.use("/items",itemRoutes);

const queryRoutes = require("./queryRoutes");
router.use("/query",queryRoutes);

const emailRoutes = require("./emailRoutes");
router.use("/email",emailRoutes);

const imgkitRoutes = require("./imgAuth");
router.use("/auth",imgkitRoutes);

module.exports = router;