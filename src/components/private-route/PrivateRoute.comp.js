import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  
  return true; // Change this according to your authentication logic
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
