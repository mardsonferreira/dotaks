import React from "react";

import { AuthLayoutProps } from "./types";

import { Wrapper, Content } from "./styles";

const AuthLayout: React.FC = ({ children }: AuthLayoutProps) => {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default AuthLayout;
