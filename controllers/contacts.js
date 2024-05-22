const Contact = require("../models/Contact");

exports.createContact = (req, res, next) => {
  const { nom, email, sujet, message } = req.body;
  const contact = new Contact({
    nom: nom,
    email: email,
    sujet: sujet,
    message: message,
  });
  contact
    .save()
    .then(() => {
      res.status(201).json({ message: "Contact created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getAllContacts = (req, res, next) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getContactById = (req, res, next) => {
  Contact.findOne({ _id: req.params.id })
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json(contact);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.deleteContact = (req, res, next) => {
  Contact.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Contact deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
