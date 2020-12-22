import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from './PrivateLayout';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        //   getCookie(TOKEN_KEY)?(
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        // ) 
        // : 
       
        // (
        //   <Redirect
        //     to={{
        //       pathname: LOGIN_URL,
        //     }}
        //   />
        // )
      }
    />
  );
};
