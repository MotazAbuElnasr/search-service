var express = require("express");
const indexRouter = require("./routes/index");
require("express-async-errors");
require("./db");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
