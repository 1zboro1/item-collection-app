const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
