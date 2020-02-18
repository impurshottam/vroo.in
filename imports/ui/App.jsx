import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter
} from "react-router-dom";
import Home from './layouts/Home';
import Login from './layouts/Login';
import PageNotFound from './layouts/PageNotFound';

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
