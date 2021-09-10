import React from "react";
import { Link } from "react-router-dom";

import profile from "../../assets/avatar-default.jpg";
import { FiMenu } from "react-icons/fi";

import { Container, Content, Profile } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <nav>
                    <FiMenu size={25} />
                    <Link to="/dashboard">DoTaks</Link>
                </nav>

                <aside>
                    <Profile>
                        <Link to="/profile">
                            <img src={profile} alt="Avatar" />
                        </Link>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
};

export default Header;
