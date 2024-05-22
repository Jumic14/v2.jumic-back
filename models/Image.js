const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  image_id: { type: Number, required: true },
  image_title: { type: String, required: true },
  image_title_en: { type: String, required: true },
  image_url: { type: String, required: true },
  work_id: { type: Number, required: true}
});

module.exports = mongoose.model("Image", imageSchema);
