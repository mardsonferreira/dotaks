import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router";

type RouteProps = {
    component: React.FC;
    isPrivate?: boolean;
} & RouteComponentProps;

const RouteWrapper: React.FC<RouteProps> = ({
    component: Component,
    isPrivate,
    ...rest
}: RouteProps) => {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
