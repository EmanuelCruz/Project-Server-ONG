const express = require("express");
const router = express.Router();
const consts = require("../constant/const");
const { body } = require("express-validator");

const membersController = require("../controllers/members");

/* Get members */
router.get("/", membersController.getMembers);

/* Create Member */
router.post(
  "/",
  body(consts.FIELD_NAME).isString(),
  membersController.createMember
);

/* Update Member */
router.put("/:id", membersController.updateMember);

module.exports = router;
