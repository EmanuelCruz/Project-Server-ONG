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
      : res.status(consts.code_failure).send(consts.USER_IS_NOT_AN_ADMIN);
  } catch (err) {
    res.status(consts.code_failure).send(consts.USER_IS_NOT_AN_ADMIN);
  }
};

// Authenticated user
exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers[consts.AUTHORIZATION];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: consts.TOKEN_IS_NOT_PROVIDED,
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const { id } = decoded.data;
    const user = await db.User.findAll({
      where: {
        id,
      },
      attributes: [
        consts.FIRST_NAME,
        consts.LAST_NAME,
        consts.EMAIL,
        consts.IMAGE,
      ],
    });
    if (!user) {
      return res.status(404).send(consts.NOT_FOUND_USER);
    }
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};
