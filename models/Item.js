const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  picture: { 
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  condition: {
    type: String,
  },
  category: {
    type: String,
  }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;