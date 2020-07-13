var express = require("express");
var router = express.Router();
const ctrl = require("./tag.ctrl");
router.get("/", ctrl.view);

module.exports = router;
