const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.use(express.json());

router.get("", auth, async (req, res) => {
  res.render("productsPage");
});

module.exports = router;
