// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const Schema = mongoose.Schema;

const testDB = mongoose.Schema(
  {
    name: String,
    password: String,
  },
  { collection: "test" }
);

let Testmodel = mongoose.model("test", testDB);

// module.exports = Testmodel;
export default Testmodel;
