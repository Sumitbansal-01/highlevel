const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get("/", controller.showTables)

module.exports = router
