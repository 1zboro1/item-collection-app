const router = require("express").Router();
const User = require("../models/user");
router.post("/", async (req, res) => {
  var query = { email: req.body.email };

  try {
    await User.findOneAndUpdate(query, {
      $pull: {
        collections: {
          _id: req.body._id,
        },
      },
      function(err, result) {
        if (err) {
          res.json(err);
        }
      },
    });
    alert("Collection deleted");
    res.json({ status: "Collection deleted" });
  } catch (error) {
    res.json({ status: "error", error: "User not found" });
  }
});
module.exports = router;
