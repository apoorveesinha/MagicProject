const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Products = require("../models/productDetails");

router.use(express.json());

router.get("", auth, async (req, res) => {
  try {
    const products = await Products.find(
      {},
      { _id: 0, productName: 1, productPrice: 1 }
    );
    return res.status(200).send(products);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/:productName", async (req, res) => {
  try {
    const product = await Products.find({
      productName: req.params.productName,
    });
    if (Object.keys(product).length === 0) {
      return res.status(200).send("No product found!");
    } else {
      return res.status(200).send(product);
    }
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const {
      productName,
      productPrice,
      uniqueSKUCode,
      modelNo,
      productDescription,
      deliveryCharges,
      inStock,
    } = req.body;

    const duplicateSKUCode = await Products.findOne({ uniqueSKUCode }).lean();
    if (duplicateSKUCode) {
      return res.json({ status: "error", error: "Product already exists" });
    }

    var inStockV = true;
    if (inStock === "No") inStockV = false;

    const registerProduct = new Products({
      productName,
      productPrice,
      uniqueSKUCode,
      modelNo,
      productDescription,
      deliveryCharges,
      inStock: inStockV,
    });

    const result = await registerProduct.save();
    //console.log(typeof registerProduct);
    console.log("Product Added Succesfully");
    return res.json({ status: "OK" });
  } catch (error) {
    //res.send("Error: " + error);
    console.log(error);
    return res.json({
      status: "error",
      error: "Can't add product due to error. Retry",
    });
  }
});

module.exports = router;
