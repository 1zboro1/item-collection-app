const router = require("express").Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  User.updateOne(
    { _id: req.body._id },
    { $set: { admin: true } },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});
module.exports = router;
