/* eslint-disable no-unused-vars */
const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/bookRouter")(Book);

if (process.env.ENV === "Test") {
  console.log("This is a test");
  const db = mongoose.connect("mongodb://localhost/bookAPI_Test");
} else {
  console.log("This is for real");
  const db = mongoose.connect("mongodb://localhost/bookAPI-prod");
}

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Rest API");
});

app.server = app.listen(port, () => {
  console.log("Running on port " + port);
});

module.exports = app;
