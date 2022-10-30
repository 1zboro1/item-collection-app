const router = require("express").Router();
const User = require("../models/user");
router.post("/", async (req, res) => {
  try {
    await User.findOne(
      { collections: { _id: req.body._id } },
      async (error, result) => {
        if (error) {
          res.send(error);
        } else {
          res.json(result);
        }
      }
    );
  } catch (error) {
    res.json({ status: "error", error: "Collection not found" });
  }
});
module.exports = router;
