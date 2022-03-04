const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//CREATE USER SCHEMA

//product name, product price,unique product sku code,
//model no., delivery charges, product description, In stock (true/false)

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  uniqueSKUCode: { type: String, required: true, unique: true },
  modelNo: { type: String, required: true },
  productDescription: { type: String, required: true },
  deliveryCharges: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

//Generate Tokens
// const userSchema = require("./userDetails");
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     //console.log(this._id);
//     const token = jwt.sign(
//       {
//         _id: this._id,
//         username: this.username,
//       },
//       process.env.JWT_SECRETKEY
//     );
//     this.tokens = this.tokens.concat({ token: token });
//     //console.log(`Token: ${token}`);
//     await this.save();
//     return token;
//   } catch (error) {
//     console.log(`Error: ${this.error}`);
//     //return res.json({})
//   }
// };

//Converting password into hash
// productSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     console.log(`Current Password: ${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(`Current Password: ${this.password}`);
//   }
//   next();
// });

const RegisterProductDetails = new mongoose.model(
  "SchemaOfProducts",
  productSchema
);
module.exports = RegisterProductDetails;
