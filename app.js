var express = require("express");
var app = express();
const bookRouter = express.Router();
// eslint-disable-next-line no-undef
var port = process.env.PORT || 3000;

bookRouter.route("/books").get((req, res) => {
  const response = { hello: "This is my API" };
  res.json(response);
});
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Rest API");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
