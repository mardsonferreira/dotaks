import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" component={SignUp} />

                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/profile" component={Profile} isPrivate />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
