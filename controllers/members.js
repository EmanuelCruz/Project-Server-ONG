const membersQuery = require("../querys/members");

exports.getMembers = async (req, res) => {
  const members = await membersQuery.getAllMembers(req, res);
  return members;
};
