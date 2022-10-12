const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3005;
const path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname + "/client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client", "build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
