const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  sujet: { type: String, required: true },
  message: { type: String, required: true },
  date_creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
