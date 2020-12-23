import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateLayout } from "./PrivateLayout";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(localStorage.getItem("user"), "local");
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
