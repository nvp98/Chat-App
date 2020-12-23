import express from "express";
const router = express.Router();
import AuthModel from "../models/AuthModel.js";
// const testModel = require("../models/Test.model.js");

export const postLogin = async (req, res) => {
  // if (req.method === "POST") console.log("this is the POST method");
  //   TestModel.find().then((user) => res.json(user));
  // console.log("type", typeof data[0].name);
  // res.status(200).json(data);
  // AuthModel.find().then((users) => res.json(users));

  try {
    if (req.body.username && req.body.password) {
      let data = await AuthModel.findOne(req.body, (err, res) => {
        if (err) console.log(err);
        if (res) return res;
      });
      console.log(data);
      if (data) res.status(200).json(data);
      else res.status(401).json("The username or password was not correct");
    } else {
      res.status(401).json("Please fill username and password");
    }
  } catch (error) {
    response.status(404, "The task is not found").send();
  }
};

export const SignUp = async (req, res) => {
  // let obj = req.body;
  // console.log(req.body.username);
  // console.log(obj, "obj");
  // if (req.method === "POST") console.log("this is the POST method");
  //   TestModel.find().then((user) => res.json(user));
  // console.log("type", typeof data[0].name);
  // res.status(200).json(data);
  try {
    if (req.body.username && req.body.password) {
      const data = await AuthModel.insertMany(req.body);
      console.log(data, "respon");
      res.status(200).json(data);
    } else {
      res.status(200).json("Please Input UserName and Password");
    }
  } catch (error) {
    res.send(error);
  }
  // AuthModel.insertMany(obj).then((users) => res.json(users));
  // res.status(200).json("SignUp successfull");
};

export const getUser = async (req, res) => {
  try {
    AuthModel.find().then((user) => res.json(user));
    // res.status(200).json("SignUp successfull");
  } catch (error) {
    res.send(error);
  }
  // AuthModel.insertMany(obj).then((users) => res.json(users));
  // res.status(200).json("SignUp successfull");
};

export default router;
