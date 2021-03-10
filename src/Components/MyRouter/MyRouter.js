import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from '../Home/Home';
import TeamDetails from '../TeamDetails/TeamDetails';

const MyRouter = () => {
    return (
        <Router>
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/details/:teamId">
                    <TeamDetails/>
                </Route>
                
            </Switch>


        </Router>
    );
};

export default MyRouter;