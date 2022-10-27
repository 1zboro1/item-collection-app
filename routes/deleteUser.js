const router = require("express").Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  User.deleteOne({ _id: req.body._id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
