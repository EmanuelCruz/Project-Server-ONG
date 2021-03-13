var express = require("express");
const db = require("../models");
var router = express.Router();
const userDelete = require("../querys/deleteUser");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

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
