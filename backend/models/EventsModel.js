const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;
