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

// const router = require("express").Router();
// const User = require("../models/user");

// router.post("/", async (req, res) => {
// const email = req.body.email;
// console.log("Email from frontend", email)
//   var query = { email: req.body.email };
//   if (email != null || undefined) {
// try {
//   const user = await User.find({ email});
//   console.log("User Details in User Routes of Backend",user)
//   if (user.length > 0) {
//     const currentUser = {
//       name: user[0].name,
//       email1: user[0].email1,
//       isAdmin: user[0].isAdmin,
//       _id: user[0]._id,
//     };
//     console.log("Get User in User Routes of Backend", currentUser)
//     res.status(200).send(currentUser);
//   }
// } catch (error) {
//   res.status(404).json({
//     message: "Something Went wrong",

//   });
// }}})

module.exports = router;
