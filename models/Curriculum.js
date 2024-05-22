const mongoose = require("mongoose");

const curriculumSchema = mongoose.Schema({
  curriculum_id: { type: Number, required: true },
  curriculum_name: { type: String, required: true },
  curriculum_url: { type: String, required: true },
});

module.exports = mongoose.model("Curriculum", curriculumSchema);
