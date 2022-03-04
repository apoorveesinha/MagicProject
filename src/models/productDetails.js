const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  uniqueSKUCode: { type: String, required: true, unique: true },
  modelNo: { type: String, required: true },
  productDescription: { type: String, required: true },
  deliveryCharges: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const RegisterProductDetails = new mongoose.model(
  "SchemaOfProducts",
  productSchema
);
module.exports = RegisterProductDetails;
