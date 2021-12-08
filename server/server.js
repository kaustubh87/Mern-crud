const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//Endpoint creation

app.get("*", function (req, res) {
  res.json({
    data: "You reached nodejs API",
  });
});

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
