import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from '../imports/ui/components/Navbar/Navbar';

import App from '../imports/ui/App';
import Landing from '../imports/ui/pages/Landing/Landing';
import Login from '../imports/ui/pages/Login/Login';
import Signup from '../imports/ui/pages/Signup/Signup';
import Profile from '../imports/ui/pages/Profile/Profile';
import NotFound from '../imports/ui/pages/Not-Found/Not-Found';
import RecoverPassword from '../imports/ui/pages/RecoverPassword/RecoverPassword';
import ResetPassword from '../imports/ui/pages/ResetPassword/ResetPassword';

import Spinner from '../imports/ui/components/Spinner/Spinner';

import PropsRoute from '../imports/ui/pages/PropsRoute/PropsRoute';

const Routings = props => (
  <Router>
    <div>
      <PropsRoute component={Navbar} {...props}/>
      {props.loggingIn && <Spinner />}
      <Switch>
        <PropsRoute exact path="/" component={Landing} {...props} />

        <PropsRoute path="/login" component={Login} {...props} />
        <PropsRoute path="/signup" component={Signup} {...props} />
        <PropsRoute exact path="/profile" component={App} {...props} />
        <PropsRoute exact path="/profile/:_id" component={Profile} {...props} />
        <PropsRoute
          path="/recover-password"
          component={RecoverPassword}
          {...props}
        />
        <PropsRoute
          path="/reset-password/:token"
          component={ResetPassword}
          {...props}
        />
        <PropsRoute component={NotFound} {...props} />
      </Switch>
    </div>
  </Router>
);

Routings.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  userReady: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const userSub = Meteor.subscribe('user');
  const user = Meteor.user();
  const userReady = userSub.ready() && !!user;
  const loggingIn = Meteor.loggingIn();
  const loggedIn = !loggingIn && userReady;
  return {
    loggingIn,
    userReady,
    loggedIn,
  };
})(Routings);