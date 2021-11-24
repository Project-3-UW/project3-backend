const express = require('express');
const router = express.Router();

const frontRoutes = require("./frontRoutes.js");
router.use(frontRoutes);

const apiRoutes = require("./api");
router.use("/api",apiRoutes);

module.exports = router;