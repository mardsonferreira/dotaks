import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import * as Yup from "yup";

import { SignUpFormData } from "./types";

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required("Required field"),
                email: Yup.string()
                    .email("Invalid E-mail")
                    .required("Required field"),
                password: Yup.string().min(6).required("Required field"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            console.log(data);
        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    if (error && error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });

                formRef.current?.setErrors(validationErrors);
            }
        }
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
