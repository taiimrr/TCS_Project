var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  class: { type: Schema.Types.ObjectId, ref: "Classm" },
});

const Mat = mongoose.model("Mat", matSchema);

module.exports = Mat;
