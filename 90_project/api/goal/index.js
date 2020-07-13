var express = require("express");
var router = express.Router();
const ctrl = require("./goal.ctrl");
router.get("/", ctrl.set);
router.post("/", ctrl.obj);
module.exports = router;
