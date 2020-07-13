const express  = require("express");
const router = express.Router();
router.use("/event", require("./event"));
router.use("/tag", require("./tag"));
router.use("/goal", require("./goal"));

module.exports = router;
