import React from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";

import SignInSchema, { SignInForm } from "./types";

const SignIn: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>({
        resolver: yupResolver(SignInSchema),
    });

    const submitForm: SubmitHandler<SignInForm> = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    register={register}
                    error={errors.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    error={errors.password}
                />

                <button type="submit">Sign In</button>
                <Link to="/register">Create account</Link>
            </form>
        </>
    );
};

export default SignIn;
