const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    }
    await User.create({
      username: req.body.username,
      pasword: req.body.password,
      email: req.body.email,
      admin: false,
      blocked: false,
      collections: [null],
    });
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
module.exports = router;
