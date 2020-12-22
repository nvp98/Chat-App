import express from "express";
import mongoose from "mongoose";

const router = express.Router();
import TestModel from "../models/Testmodel.js";
// const testModel = require("../models/Test.model.js");

// const router = express.Router();
export const Sendmsg = async (req, res) => {
  TestModel.find().then((user) => res.json(user));
  // console.log("type", typeof data[0].name);
  // res.status(200).json(data);
};

export default router;