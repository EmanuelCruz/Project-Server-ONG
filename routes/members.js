const express = require("express");
const router = express.Router();
const membersController = require("../controllers/members");

/* GET members */
router.get("/", membersController.getMembers);
