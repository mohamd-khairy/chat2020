const moment = require("moment");
const cors = require("cors");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const axios = require("axios");
const io = require("socket.io")(server, {
  cors: "*",
});
const path = require('path');


server.listen(process.env.PORT || 5000, () =>
  console.log(`Server is ready on port 5000`)
);

app.get("/home", (req, res) => {
  res.send("hello world!");
});