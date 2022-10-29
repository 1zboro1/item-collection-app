const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const User = require("../models/user");
router.post("/", async (req, res) => {
  var query = { email: req.body.email };
  try {
    await User.updateOne(query, {
      $push: {
        collections: [
          {
            _id: new mongoose.Types.ObjectId(),
            coll_name: req.body.coll_name,
            type: req.body.coll_type,
            coll_desc: req.body.coll_descritpion,
            coll_image: req.body.coll_image,
            items: [],
          },
        ],
      },
      function(err, result) {
        if (err) {
          res.json(err);
        }
      },
    });
    alert("Collection created");
    res.json({ status: "Collection created" });
  } catch (error) {
    res.json({ status: "error", error: "User not found" });
  }
});
module.exports = router;
