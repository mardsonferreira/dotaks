import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

const SignIn: React.FC = () => {
    return (
        <>
            <form>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Password" />

                <button type="submit">Sign In</button>
                <Link to="/register">Sing Up for free</Link>
            </form>
        </>
    );
};

export default SignIn;
