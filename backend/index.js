const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// cors
app.use(cors());

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router
const todoRouter = require("./router/todoRouter.js");
app.use("/", todoRouter);

// mongoose
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected to mongoose"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
