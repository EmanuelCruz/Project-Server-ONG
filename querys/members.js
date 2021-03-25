const db = require("../models");
const Members = db.Members;

exports.getAllMembers = async () => {
  const members = await Members.findAll();
  return members;
};
