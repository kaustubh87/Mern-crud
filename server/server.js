const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./routes/post");
const app = express();

//Database connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//Routes

app.use("/api", postRoutes);

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
