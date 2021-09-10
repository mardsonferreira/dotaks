import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

import { store } from "../store";

type RouteProps = {
    component: React.FC;
    isPrivate?: boolean;
} & RouteComponentProps;

const RouteWrapper: React.FC<RouteProps> = ({
    component: Component,
    isPrivate,
    ...rest
}: RouteProps) => {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        console.log("Redirecting to home");
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        console.log("Redirecting to dashboard");
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    console.log(rest);
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
};

export default RouteWrapper;
