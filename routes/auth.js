const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");
const consts = require("../constant/const");

/* POST login with email and password. */
router.post(
  consts.url_auth_login,
  loginController.loginValuesFieldValidator,
  loginController.loginValidator,
  loginController.loginAuth
);

module.exports = router;
