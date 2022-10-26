const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  admin: { type: Boolean },
  blocked: { type: Boolean },
  collections: [
    {
      coll_id: { type: String },
      coll_name: { type: String },
      type: { type: String },
      coll_description: { type: String },
      coll_image: { type: String },
      items: [
        {
          item_id: { type: String },
          item_name: { type: String },
          item_description: { type: String },
          comments: [
            {
              user: { type: String },
              comment: { type: String },
              comment_id: { type: String },
            },
          ],
          likes: { type: Number },
          item_image: { type: String },
          upload_date: { type: String },
        },
      ],
    },
  ],
});

userSchema.methods.generateAuthToken = function () {
  const appToken = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return appToken;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
