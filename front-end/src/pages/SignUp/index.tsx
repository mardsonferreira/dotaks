import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import logo from "../../assets/logo.svg";

import { SignUpFormData } from "./types";

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<SignUpFormData> = (data) => {
        console.log(data);
    };

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Full name" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />

                <button type="submit">Sign Up</button>
                <Link to="/">I already have an account.</Link>
            </Form>
        </>
    );
};

export default SignUp;
