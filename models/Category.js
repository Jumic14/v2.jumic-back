const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category_id: { type: Number, required: true },
  category_name: { type: String, required: true },
  category_name_en: { type: String, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
