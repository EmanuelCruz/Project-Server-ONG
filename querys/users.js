const db = require("../models");
const User = db.User;

exports.getUsersList = async () => {
  try {
    const usersInDataBase = await User.findAll();
    return usersInDataBase;
  } catch (err) {
    return err;
  }
};
