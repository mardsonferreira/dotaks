import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import { SignInFormData } from "./types";

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<SignInFormData> = (data) => {
        console.log(data);
    };

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />

                <button type="submit">Sign In</button>
                <Link to="/register">Create account</Link>
            </Form>
        </>
    );
};

export default SignIn;
