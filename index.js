
const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path')

let port = process.env.PORT || 5000;

var corsOptions = {
  origin: "https://rakhis.codlop.com/"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.listen(port);

app.get("/", (req, res) => {
  res.send("hello world!");
});