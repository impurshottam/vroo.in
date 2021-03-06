/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import styles from "./styles/styles";

import Store from "./Store";

// import components
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";

// import routes
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/SignIn/SignIn";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import PropsRoute from "./pages/PropsRoute/PropsRoute";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Tours from "./pages/Tours/Tours";
// import TourTemplatesLandingPage from "./pages/Tour/TourTemplatesLandingPage";
// import CreateTour from "./pages/Tour/CreateTour";
// import Krpano from "./pages/Krpano/Krpano";

// import constants
import { TEXT } from "./constants/Text";
import { ROUTES } from "./constants/Routes";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import CreateTour from "./pages/CreateTour/CreateTour";
import HorizontalLinearStepper from "./pages/CreateTour/StepsTours";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <Provider store={Store}>
      <Router>
        <div>
          {/* <PropsRoute component={Header} {...props} /> */}
          {/* {props.loggingIn && <Spinner />} */}
          <Switch>
            <PropsRoute
              exact
              path={ROUTES.LANDING}
              component={Landing}
              {...props}
            />
            <PropsRoute path="/profile" component={Profile} {...props} />
            <PropsRoute path={ROUTES.SIGN_IN} component={SignIn} {...props} />
            <PropsRoute path={ROUTES.SIGN_UP} component={Signup} {...props} />
            <PropsRoute
              path={ROUTES.CHANGE_PASSWORD}
              component={ChangePassword}
              {...props}
            />
            <PropsRoute
              exact
              path={ROUTES.TOURES}
              component={Tours}
              {...props}
            />
            <PropsRoute
              exact
              path={ROUTES.CREATE_TOUR}
              component={HorizontalLinearStepper}
              {...props}
            />
            {/* <PropsRoute
              path={ROUTES.TOUR_TEMPLATES}
              component={TourTemplatesLandingPage}
              {...props}
            />
            <PropsRoute
              path={`${ROUTES.TOUR_TEMPLATES}/:folder/:file`}
              component={Krpano}
              {...props}
            /> */}
            {/* <PropsRoute
              path={ROUTES.RESET_PASSWORD}
              component={ResetPassword}
              {...props}
            /> */}
            <PropsRoute component={NotFound} {...props} />
          </Switch>
          {/* <Footer/> */}
        </div>
      </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  userReady: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withTracker(() => {
    const userSub = Meteor.subscribe("user");
    const user = Meteor.user();
    const userReady = userSub.ready() && !!user;
    const loggingIn = Meteor.loggingIn();
    const loggedIn = !loggingIn && userReady;
    return {
      user,
      loggingIn,
      userReady,
      loggedIn
    };
  })
)(App);
