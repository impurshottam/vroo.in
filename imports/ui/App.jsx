import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter
} from "react-router-dom";
import Home from './views/home/Home';
import Login from './views/login/Login';
import PageNotFound from './views/shared/PageNotFound';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);

export default App;
