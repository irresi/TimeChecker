const express  = require("express");
const router = express.Router();
console.log('router called')
router.use("/movie", require("./movie"));
router.use("/music", require("./music"));

module.exports = router;
