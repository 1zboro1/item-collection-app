const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email } );
  if(!user){
    return res.json({ status: "User not found" });
  }
  async (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result.collections);
    }
  }
});
module.exports = router;
