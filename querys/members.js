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
