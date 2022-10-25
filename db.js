require('dotenv').config();
const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("Connection error to DB");
  }
};
