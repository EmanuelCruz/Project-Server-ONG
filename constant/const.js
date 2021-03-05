const { body } = require("express-validator");

module.exports = {
  // GET organizacion public
  url_org: "/:id/public",
  // POST login with email and password
  url_auth_login: "/login",
  // SUCCESS code
  code_success: 200,
  // FAILURE code
  code_failure: 500,
};

//** This string is used for validate email and password fields when the user login */
module.exports.loginValuesFieldValidator = [
  body("email").exists().isEmail().withMessage("Invalid email or password"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Invalid email or password"),
];
