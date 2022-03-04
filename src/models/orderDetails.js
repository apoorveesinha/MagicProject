const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
