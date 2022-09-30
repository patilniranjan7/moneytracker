import React from 'react';
import { Redirect , BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import HomeLayout from '../layout/HomeLayout';
import Home from '../page/Home/Home';
import Login from '../page/LogIn/Login';


function PrivateRoute({ children, ...rest }) {
    const auth = useAuth();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.getUserId() ? (
              <HomeLayout>{children}</HomeLayout>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
      />
          )
        }
      />
    );
}


const RouteList = () => {
    return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
    );
}

export default RouteList;
