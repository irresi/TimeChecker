var express = require("express");
var router = express.Router();
const ctrl = require("./movie.ctrl");
router.get("/", ctrl.list);
router.get("/new", ctrl.showCreatePage);
router.get("/:id", ctrl.checkId, ctrl.detail);
router.get("/:id/edit", ctrl.checkId, ctrl.showUpdatePage);
router.post("/", ctrl.create);
router.put("/:id", ctrl.checkId, ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
