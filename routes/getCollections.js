const router = require("express").Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  var query = { email: req.body.email };

  User.findOne(query, (err, result) => {
    if (err) {
      res.json({ status: "error", error: "User not found" }, err);
    } else {
      res.json(result.collections);
    }
  });
});

module.exports = router;
