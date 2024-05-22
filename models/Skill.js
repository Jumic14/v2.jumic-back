const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  skill_id: { type: Number, required: true },
  skill_desc: { type: String, required: true },
  skill_desc_en: { type: String, required: true },
  certification_id: { type: String, required: true },
});

module.exports = mongoose.model("Skill", skillSchema);
