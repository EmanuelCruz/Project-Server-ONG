var express = require("express");
const db = require("../models");
var router = express.Router();
const userDelete = require("../querys/deleteUser");

<<<<<<< HEAD
const consts = require("../constant/const");
const usersController = require("../controllers/users");

/* GET users listing if user is admin. */
router.get(consts.url_users, usersController.usersList);
=======
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
>>>>>>> 7e380be36928fcac3b61e521d97742bab1f9e3c7

/* GET authenticated user. */
router.get("/auth/me", async function (req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: "no token provided",
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const { id } = decoded.data;
    const user = await db.User.findAll({
      where: {
        id,
      },
      attributes: ["firstName", "LastName", "email", "image"],
    });
    if (!user) {
      return res.status(404).send("No user found");
    }
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

/* DELETE a user by id  */
router.delete("/:id", userDelete.deleteUser);

module.exports = router;
