import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/LoginPage/SignUpPage";
import HomePage from "./Pages/HomePage/HomePage";
import ChatPage from "./Pages/ChatPage/ChatPage";

const routers = [
  {
    path: "/login",
    exact: true,
    component: LoginPage,
    // isPrivate: true,
  },
  {
    path: "/signup",
    exact: true,
    component: SignUpPage,
    // isPrivate: true,
  },
  {
    path: "/",
    exact: true,
    component: HomePage,
    isPrivate: true,
  },
  {
    path: "/homepage",
    exact: true,
    component: HomePage,
    isPrivate: true,
  },
  {
    path: "/chat",
    exact: true,
    component: ChatPage,
    isPrivate: true,
  },
];
export default routers;
