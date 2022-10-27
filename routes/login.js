const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      alert("Invalid email or password");
      return res.status(401).send({ message: "Invalid email or password" });
    }
    if (user.blocked) {
      alert("You are blocked!");
      return res.status(402).send({ message: "User blocked" });
    }
    const emailToken = req.body.email;
    const appToken = user.generateAuthToken();
    let adminToken = "nonAdmin";
    if (user.admin) {
      adminToken = "admin";
    }

    console.log("Logged in");
    res.status(200).send({
      loginToken: appToken,
      admin: adminToken,
      email: emailToken,
      message: "Logged in",
    });
  } catch (error) {
    console.log("Internal server error");
    res.status(500).send({ message: "Internal server error" });
  }
});
module.exports = router;
