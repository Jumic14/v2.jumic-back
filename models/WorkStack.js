const mongoose = require("mongoose");

const workStackSchema = mongoose.Schema({
  work_id: { type: Number, required: true },
  stack_id: { type: Number, required: true },
});

module.exports = mongoose.model("WorkStack", workStackSchema);
