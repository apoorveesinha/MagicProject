const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const auth = require("../middleware/auth");
const User = require("../models/userDetails");

router.use(express.json());
router.use(cookieParser());

router.get("", auth, (req, res) => {
  res.render("profile");
  //console.log(`This is the COOKIE: ${req.cookies.jwt}`);
});

router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username });
    res.send(user);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.post("", auth, (req, res) => {
  res.json({ status: "OK" });
});

module.exports = router;
