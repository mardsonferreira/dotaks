import React from "react";

import { DefaultLayoutProps } from "./types";

import Header from "../../../components/Header";

import { Wrapper } from "./styles";

const DefaultLayout: React.FC = ({ children }: DefaultLayoutProps) => {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
};

export default DefaultLayout;
