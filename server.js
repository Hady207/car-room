require("dotenv").config({ path: "./Config.env" });
const express = require("express");

const Routes = require("./Routes");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/api", Routes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`server started on port ${port}`));
