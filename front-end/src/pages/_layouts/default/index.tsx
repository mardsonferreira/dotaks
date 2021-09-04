import React from "react";

import { DefaultLayoutProps } from "./types";

import { Wrapper } from "./styles";

const DefaultLayout: React.FC = ({ children }: DefaultLayoutProps) => {
    return <Wrapper>{children}</Wrapper>;
};

export default DefaultLayout;
