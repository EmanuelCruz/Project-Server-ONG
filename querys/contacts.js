const db = require("../models");
const Contacts = db.Contacts;

exports.getRegistredContacts = async () => {
  try {
    const contactsInDataBase = await Contacts.findAll();
    return contactsInDataBase;
  } catch (err) {
    return err;
  }
};
