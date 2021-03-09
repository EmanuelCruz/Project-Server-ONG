const loginQuery = require("../querys/login");
var consts = require("../constant/const");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.loginAuth = async (req, res, next) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  try {
    const user = await loginQuery.getUserByEmail(emailInput);
    const userInDataBase = user.dataValues.email;

    if (emailInput === userInDataBase) {
      const password = await loginQuery.getUserByPassword(passwordInput);
      const validPassword = await bcrypt.compare(passwordInput, password);

      if (validPassword) {
        res.status(consts.code_success).send(user.dataValues);
      }
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
