const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }
    const appToken = user.generateAuthToken();
    res.status(200).send({ data: appToken, message: "Logged in" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
module.exports = router;
