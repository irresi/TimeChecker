var express = require("express");
var router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/signup", ctrl.showSignupPage); //회원가입 페이지
router.get("/login", ctrl.showLoginPage); //회원가입 페이지
router.get("/logout", ctrl.logout); //회원가입 페이지
router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);
module.exports = router;