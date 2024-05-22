const mongoose = require("mongoose");

const certificationSchema = mongoose.Schema({
  certification_id: { type: Number, required: true },
  certification_entity: { type: String, required: true },
  certification_name: { type: String, required: true },
  certification_name_en: { type: String, required: true },
  certification_url: { type: String, required: true },
  category_id: { type: Number, required: true },
});

module.exports = mongoose.model("Certification", certificationSchema);
