import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './views/home/Home';
import PageNotFound from './views/shared/PageNotFound';
import SiginIn from './views/login/SiginIn';
import Siginup from './views/login/Siginup';
import ForgotPassword from './views/login/ForgotPassword';
import ToursLandingPage from './views/tour-creator/TourLandingPage';
import CreateTour from './views/tour-creator/CreateTour';
import TourTemplatesLandingPage from './views/tour-creator/TourTemplatesLandingPage';
import Krpano from './views/krpano/Krpano';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sign-in" component={SiginIn}/>
            <Route path="/sign-up" component={Siginup}/>
            <Route exact path="/tours" component={ToursLandingPage}/>
            <Route exact path="/tours/create" component={CreateTour}/>
            <Route exact path="/tours/templates" component={TourTemplatesLandingPage}/>
            <Route exact path="/tours/templates/:folder/:file" component={Krpano}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);

export default App;
