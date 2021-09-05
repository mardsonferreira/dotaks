import React from "react";

import logo from "../../../assets/logo.svg";

import { AuthLayoutProps } from "./types";

import { Wrapper, Content, Logo } from "./styles";

const AuthLayout: React.FC = ({ children }: AuthLayoutProps) => {
    return (
        <Wrapper>
            <Content>
                <Logo>
                    <img src={logo} alt="Dotaks" />
                    <strong>DoTaks</strong>
                </Logo>
                {children}
            </Content>
        </Wrapper>
    );
};

export default AuthLayout;
