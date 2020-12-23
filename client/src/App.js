import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { API_URL } from "./GlobalConstants";
import { Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./Layouts/";
import routes from "./router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// let socket = io("localhost:5001");

function App() {
  const renderContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ) : (
          <PublicRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return <Router history={history}>{renderContent(routes)}</Router>;
}

export default App;
