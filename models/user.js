const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  admin: { type: Boolean },
  blocked: { type: Boolean },
  collections: [
    {
      coll_name: { type: String },
      type: { type: String },
      coll_description: { type: String },
      coll_image: { type: String },
      items: [
        {
          _id: { type: mongoose.Schema.Types.ObjectId, required: true },
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
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
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
