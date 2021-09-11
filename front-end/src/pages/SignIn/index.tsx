import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../components/Input";
import { signInRequest } from "../../store/modules/auth/actions";

import SignInSchema, { SignInForm } from "./types";
import { useAppSelector } from "../../store/types";

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useAppSelector((state) => state.auth.loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>({
        resolver: yupResolver(SignInSchema),
    });

    const submitForm: SubmitHandler<SignInForm> = (data) => {
        dispatch(signInRequest(data));
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

                <button type="submit">
                    {loading ? "Loading..." : "Sign In"}
                </button>
                <Link to="/register">Create account</Link>
            </form>
        </>
    );
};

export default SignIn;
