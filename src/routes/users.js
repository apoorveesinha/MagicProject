const express = require("express");
const router = express.Router();
const User = require("../models/userDetails");

router.use(express.json());

router.get("", async (req, res) => {
  try {
    const users = await User.find({}, { _id: 0, username: 1 });
    res.status(200).send(users);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const user = await User.find(
      { username: req.params.username },
      { _id: 0, username: 1, emailID: 1 }
    );
    if (Object.keys(user).length === 0) {
      //console.log(user);
      //console.log(typeof user);
      return res.status(200).send("No user found");
    } else {
      //console.log(user);
      //console.log(typeof user);
      return res.status(200).send(user);
    }
  } catch (error) {
    return res.send("Error: " + error);
  }
});

module.exports = router;
