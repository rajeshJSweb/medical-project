import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user,isLoading } = useAuth();
  
  if (isLoading) {
    return <p>Loading.....</p>
  }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
        >   
        </Route>
    );
};

export default PrivateRoute;