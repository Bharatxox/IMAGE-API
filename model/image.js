const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const imageModel = mongoose.model("images", imageSchema);

module.exports = imageModel;
