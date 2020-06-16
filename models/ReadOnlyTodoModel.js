const mongoose = require("mongoose");
const { Schema } = mongoose;
module.exports = mongoose.model("Todo", new Schema({}));
