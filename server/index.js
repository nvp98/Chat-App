import express from "express";
import * as bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// require("dotenv").config();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const server = http.createServer(app);
// const io = socketio(server);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

//define variable
let users = [];

//route
// const auth = require("./routes/Auth.route.js");
// const test = require("./routes/test.js");
import test from "./routes/test.js";
import auth from "./routes/Authroute.js";
// app.use("/login", auth);
app.use("/name", test);
app.use("/", auth);
//SocketIO
io.on("connection", (socket) => {
  console.log(`connect: ${socket.id}`);

  socket.on("hello!", () => {
    console.log(`hello from ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });
  //test nhaaaaaaaaaaaaaaaaaaaaaaaa
  socket.on("username", (userName) => {
    users.push({
      id: socket.id,
      userName: userName,
    });

    let len = users.length;
    len--;

    io.emit("userList", users, users[len].id);
  });

  socket.on("getMsg", (data) => {
    console.log(data, "data");
    socket.broadcast.to(data.toid).emit("sendMsg", {
      msg: data.msg,
      name: data.name,
    });
  });

  socket.on("disconnect", () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === socket.id) {
        users.splice(i, 1);
      }
    }
    io.emit("exit", users);
  });
});

setInterval(() => {
  io.emit("message", new Date().toISOString());
}, 1000);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
