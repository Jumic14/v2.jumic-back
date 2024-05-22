const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
  work_id: { type: Number, required: true },
  work_name: { type: String, required: true },
  work_year: { type: Number, required: true },
  work_cover: { type: String, required: true },
  work_repo: { type: String, required: true },
  work_url: { type: String, required: true },
  work_category: { type: Number, required: true },
  work_context: { type: String, required: true },
  work_intro: { type: String, required: true },
  work_desc: { type: String, required: true },
  work_context_en: { type: String, required: true },
  work_intro_en: { type: String, required: true },
  work_desc_en: { type: String, required: true },
});

module.exports = mongoose.model("Work", workSchema);
