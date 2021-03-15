const jwt = require("jsonwebtoken");
const consts = require("../constant/const");
const usersListQuery = require("../querys/users");

// Check if user is admin (roledId === 1) and sends userslist
exports.usersList = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
  const { roleId } = decoded;

  try {
    const users = await usersListQuery.getUsersList();
    roleId === 1
      ? res.status(consts.code_success).send(users)
      : res.status(consts.code_failure).send("User is not an Admin");
  } catch (err) {
    res.status(consts.code_failure).send("User is not an Admin");
  }
};
