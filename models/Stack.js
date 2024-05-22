const mongoose = require("mongoose");

const stackSchema = mongoose.Schema({
  stack_id: { type: Number, required: true },
  stack_name: { type: String, required: true },
  stack_icon: { type: String, required: true },
  category_id: { type: Number, required: true },
});

module.exports = mongoose.model("Stack", stackSchema);
