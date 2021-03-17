const express = require("express");
const router = express.Router();

const consts = require("../constant/const");
const contactsController = require("../controllers/contacts");

/* GET contacts listing if user is admin. */
router.get(consts.URL_CONTACTS, contactsController.registredContacts);

module.exports = router;
