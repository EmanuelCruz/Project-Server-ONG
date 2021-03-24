const db = require("../models");
const consts = require("../constant/const");
const Members = db.Members;

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Members.findAll();

    if (members) {
      return res.json({
        data: members,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: consts.MESSAGE_FAILURE,
      data: {},
    });
  }
};
