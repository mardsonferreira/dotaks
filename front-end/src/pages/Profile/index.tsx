import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";

import ProfileSchema, { ProfileForm } from "./types";
import { useAppSelector, UserState } from "../../store/types";

import { Container } from "./styles";

const Profile: React.FC = () => {
    const userInfo: UserState = useAppSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileForm>({
        resolver: yupResolver(ProfileSchema),
    });

    const submitForm: SubmitHandler<ProfileForm> = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(submitForm)}>
                <Input
                    name="name"
                    placeholder="Full name"
                    defaultValue={userInfo.profile?.name}
                    register={register}
                    error={errors.name}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    defaultValue={userInfo.profile?.email}
                    register={register}
                    error={errors.email}
                />

                <hr />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Current Password"
                    register={register}
                    error={errors.password}
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="New Password"
                    register={register}
                    error={errors.password}
                />

                <Input
                    name="ConfirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    register={register}
                    error={errors.password}
                />

                <button type="submit">Update</button>
            </form>

            <button type="button">Log out</button>
        </Container>
    );
};

export default Profile;
