const express = require('express');
var router = express.Router();
var controller = require('./profile.controller');

router.post("/saveProfile", controller.saveProfile);
router.get("/get/:id", controller.getProfile);
module.exports = router;