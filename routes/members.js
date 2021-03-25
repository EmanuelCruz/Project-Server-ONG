const express = require("express");
const router = express.Router();

const membersController = require("../controllers/members");

/* Get members */
router.get("/", membersController.getMembers);

/* Create Member */
router.post("/", membersController.createMember);

module.exports = router;
