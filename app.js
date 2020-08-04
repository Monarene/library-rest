/* eslint-disable no-unused-vars */
const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");

const app = express();
const bookRouter = express.Router();
const db = mongoose.connect("mongodb://localhost/bookAPI");
const port = process.env.PORT || 3000;

bookRouter.route("/books").get((req, res) => {
  const query = {};
  if (req.query.genre) {
    query.genre = req.query.genre;
  }
  Book.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});
bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
});
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Rest API");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
