var express = require("express");
var router = express.Router();
const ctrl = require("./event.ctrl");
router.get("/", ctrl.list);
router.get("/:id/delete", ctrl.remove);
router.get("/new", ctrl.showCreatePage);
router.get("/:id/id", ctrl.checkId, ctrl.detail);
router.get("/:id/edit", ctrl.checkId, ctrl.showUpdatePage);
router.get("/:tag/tag", ctrl.showListTag);
router.post("/", ctrl.create);
router.put("/:id", ctrl.checkId, ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
