const membersQuery = require("../querys/members");
const consts = require("../constant/const");
const { validationResult } = require("express-validator");

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

exports.createMember = async (req, res) => {
  const { name, image } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(consts.CODE_FAILURE_404)
        .json({ errors: errors.array() });
    }
    const newMember = await membersQuery.createMember(name, image);
    if (newMember) {
      return res.json({
        message: consts.CREATED_MEMBER,
        data: newMember,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
      data: {},
    });
  }
};
