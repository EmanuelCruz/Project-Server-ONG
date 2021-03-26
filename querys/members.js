const db = require("../models");
const Members = db.Members;
const consts = require("../constant/const");

exports.getAllMembers = async () => {
  const members = await Members.findAll();
  return members;
};

exports.createMember = async (name, image) => {
  const member = await Members.create(
    {
      name,
      image,
    },
    {
      fields: [consts.FIELD_NAME, consts.FIELD_IMAGE],
    }
  );
  return member;
};

exports.updateMember = async (res, id, name, image) => {
  const members = await Members.findAll({
    where: {
      id,
    },
  });
  if (members.length > consts.ARRAY_ENPTY && id) {
    members.forEach(async (member) => {
      await member.update({
        name,
        image,
      });
    });
    return members;
  } else {
    res.status(consts.CODE_FAILURE_404).json({
      message: `${consts.MEMBER_NOT_FOUND}: ${id}`,
    });
  }
};
