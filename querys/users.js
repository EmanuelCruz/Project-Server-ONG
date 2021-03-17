const db = require("../models");
let consts = require("../constant/const");
const User = db.User;

exports.getUsersList = async () => {
  try {
    const usersInDataBase = await User.findAll();
    return usersInDataBase;
  } catch (err) {
    return err;
  }
};

exports.createUser = (firstName, lastName, email, password) => {
  return User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    roleId: consts.DEFAULT_ROLE_ID,
    organizationId: consts.DEFAULT_ORG_ID
  });
};
