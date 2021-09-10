import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";

import SignUpSchema, { SignUpForm } from "./types";

import { signUpRequest } from "../../store/modules/auth/actions";

const SignUp: React.FC = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
        resolver: yupResolver(SignUpSchema),
    });

    const submitForm: SubmitHandler<SignUpForm> = (data) => {
        dispatch(signUpRequest(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <Input
                    name="name"
                    placeholder="Full name"
                    register={register}
                    error={errors.name}
                />
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

                <button type="submit">Sign Up</button>
                <Link to="/">I already have an account.</Link>
            </form>
        </>
    );
};

export default SignUp;
