const membersQuery = require("../querys/members");
const consts = require("../constant/const");

exports.getMembers = async (req, res) => {
  try {
    const members = await membersQuery.getAllMembers();

    if (members) {
      return res.json({
        data: members,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
      data: {},
    });
  }
};

exports.createMember = async (req, res) => {};
