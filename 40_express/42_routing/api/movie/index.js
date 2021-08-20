var express = require("express");
var router = express.Router();
const ctrl = require("./movie.ctrl");
router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
console.log(module.exports);