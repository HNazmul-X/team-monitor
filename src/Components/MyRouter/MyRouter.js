import React from 'react';
import { Route, Switch} from "react-router-dom"
import Home from '../Home/Home';
import TeamDetails from '../TeamDetails/TeamDetails';

const MyRouter = () => {
    return (
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/details/:teamId">
                    <TeamDetails/>
                </Route>
                
            </Switch>

    );
};

export default MyRouter;