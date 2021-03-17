const jwt = require("jsonwebtoken");
const consts = require("../constant/const");
const registredContactsQuery = require("../querys/contacts");

// Check if user is admin (roledId === 1) and sends all registred contacts
exports.registredContacts = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
  const { roleId } = decoded;

  try {
    const contacts = await registredContactsQuery.getRegistredContacts();
    roleId === 1
      ? res.status(consts.code_success).send(contacts)
      : res.status(consts.code_failure).send(consts.USER_IS_NOT_AN_ADMIN);
  } catch (err) {
    res.status(consts.code_failure).send(consts.USER_IS_NOT_AN_ADMIN);
  }
};
