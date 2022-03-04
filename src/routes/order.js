const express = require("express");
const Order = require("../models/orderDetails");
const Products = require("../models/productDetails");
const auth = require("../middleware/auth");
const router = express.Router();

router.use(express.json());

router.get("", auth, async (req, res) => {
  res.render("placeOrder");
});

router.post("/", auth, async (req, res) => {
  const { productName, quantity } = req.body;
  console.log(req.body);
  const product = await Products.find({ productName: req.body.productName });

  if (Object.keys(product).length === 0) {
    return res.status(200).send("No product found!");
  } else {
    const newOrder = new Order({ productName, quantity });
    try {
      const savedOrder = await newOrder.save();
      //return res.status(200).json(savedOrder);
      return res.json({ status: "OK" });
    } catch (error) {
      console.log(error);
      return res.json({
        status: "error",
        error: "Can't place order due to error. Retry",
      });
    }
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("Order has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Order.find(
      { userId: req.params.userId },
      { _id: 0, productName: 1, quantity: 1 }
    );
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/showAll", auth, async (req, res) => {
  try {
    const orders = await Order.find(
      {},
      { _id: 0, productName: 1, quantity: 1 }
    );
    if (Object.keys(orders).length === 0) {
      return res.status(200).send("No orders found!");
    } else {
      return res.status(200).json(orders);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
