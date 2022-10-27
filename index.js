require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const PORT = process.env.PORT || 3005;
const path = require("path");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const getUsersRoutes = require("./routes/getUsers");
const deleteUser = require("./routes/deleteUser");
const blockUser = require("./routes/blockUser");
const unblockUser = require("./routes/unblockUser");
const giveAdmin = require("./routes/giveAdmin");
const revokeAdmin = require("./routes/revokeAdmin");

connection();

app.use(express.json());
app.use(cors());

app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/getUsers", getUsersRoutes);
app.use("/api/deleteUser", deleteUser)
app.use("/api/blockUser", blockUser)
app.use("/api/unblockUser", unblockUser)
app.use("/api/giveAdmin", giveAdmin)
app.use("/api/revokeAdmin", revokeAdmin)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/client/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
