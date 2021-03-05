const loginQuery = require("../querys/login");
var consts = require("../constant/const");
const { body, validationResult } = require("express-validator");

exports.loginAuth = async (req, res, next) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  try {
    const user = await loginQuery.getUserByEmail(emailInput);
    const userInDataBase = user.dataValues.email;

    if (emailInput === userInDataBase) {
      const password = await loginQuery.getUserByPassword(passwordInput);
      const passwordInDataBase = password.dataValues.password;
      if (passwordInput === passwordInDataBase) {
        res.status(consts.code_success).send(user.dataValues);
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    res.status(consts.code_failure).send({ ok: false });
  }
};

exports.loginValidator = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  next();
};

exports.loginValuesFieldValidator = [
  body("email").exists().isEmail().withMessage("Invalid email or password"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Invalid email or password"),
];
