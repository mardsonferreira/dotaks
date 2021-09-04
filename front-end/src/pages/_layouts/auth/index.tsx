import React from "react";

import { AuthLayoutProps } from "./types";

import { Wrapper } from "./styles";

const AuthLayout: React.FC = ({ children }: AuthLayoutProps) => {
    return <Wrapper>{children}</Wrapper>;
};

export default AuthLayout;
