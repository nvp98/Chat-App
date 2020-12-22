import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import io from "socket.io-client";
import { API_URL } from "../../GlobalConstants";

const ENDPOINT = API_URL;
const socket = io(ENDPOINT);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ChatPage = (props) => {
  const { item } = props.location.state;
  const { userSend } = props.location.state;
  const [message, setMessage] = useState([]);
  const [msgSend, setMsgSend] = useState("");
  const [userList, setUserList] = useState([]);
  const [msgSendList, setMsgSendList] = useState([]);
  let messages = [];

  useEffect(() => {
    socket.on("sendMsg", (data) => {
      //   messages.push(data);
      //   setMessage([...message, data]);
      setMessage((message) => [...message, data]);
    });
    socket.emit("username", userSend.user);

    socket.on("userList", (userList, socketId) => {
      //   console.log(userList, "list");
      if (socketId === null) {
        socketId = socketId;
      }
      // userList = userList;
      setUserList(userList);
    });
  }, []);
  console.log(message, "mess");

  const sendMessage = () => {
    // console.log(username, "user");
    clearForm();
    let send = "";
    userList.map((items, index) => {
      if (items.userName == item.username) {
        send = items.id;
        // console.log(send, "send");
      }
    });
    socket.emit("getMsg", {
      toid: send,
      msg: msgSend,
      name: userSend.user,
    });
    setMsgSendList((msgSendList) => [...msgSendList, { msg: msgSend }]);
  };

  const clearForm = () => {
    document.getElementById("myForm").reset();
    setMsgSend("");
  };

  return (
    <Container component="main" style={{ width: "1000px" }}>
      <CssBaseline />
      <div
        style={{
          width: "800px",
          height: "500px",
          backgroundColor: "yellow",
          margin: "auto",
          marginTop: "50px",
          display: "flex",
        }}
      >
        {/* {message.msg} item.msg; */}
        <div style={{ width: "50%", fontSize: "2rem" }}>
          <p>User Send</p>
          {msgSendList.map((item, index) => {
            return <div>{item.msg}</div>;
          })}
        </div>
        <div style={{ fontSize: "2rem", width: "50%" }}>
          <p>User Reciver</p>
          {message.map((item, index) => {
            return <div>{` ${item.name} : ${item.msg}`}</div>;
          })}
        </div>
      </div>
      <form id="myForm">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          // autoComplete="email"
          autoFocus
          value={msgSend}
          onChange={(e) => {
            setMsgSend(e.target.value);
          }}
        />
        <Button
          // type="submit"
          fullWidth
          variant="contained"
          color="primary"
          //   className={classes.submit}
          onClick={sendMessage}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};
export default ChatPage;
