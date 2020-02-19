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

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sign-in" component={SiginIn}/>
            <Route path="/sign-up" component={Siginup}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);

export default App;
