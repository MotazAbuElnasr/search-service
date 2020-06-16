const express = require("express");
const router = express.Router();
const Todo = require("../models/ReadOnlyTodoModel");
const { pick } = require("../helpers/generalHelpers");
const searchFieldsPicker = pick(["title", "description"]);

const optimizeQuery = (queryObj) =>
  Object.entries(searchFieldsPicker(queryObj)).reduce(
    (agg, [field, q]) => ({ ...agg, [field]: new RegExp(q, "i") }),
    {}
  );

router.get("/search", async function (req, res, next) {
  const data = await Todo.find(optimizeQuery(req.query));
  res.json(data);
});

module.exports = router;
