const express = require("express");
const router = express.Router();
const contactsCtrl = require("../controllers/contacts");

const auth = require('../middleware/auth');

router.post("/", contactsCtrl.createContact);
router.get("/", contactsCtrl.getAllContacts);
router.get("/:id", contactsCtrl.getContactById);
router.delete("/:id", auth, contactsCtrl.deleteContact);

module.exports = router;
