import React from "react";
import { useDispatch } from "react-redux";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";
import AvatarInput from "./AvatarInput";

import ProfileSchema, { ProfileForm } from "./types";
import { useAppSelector, UserState } from "../../store/types";

import { UpdateProfileRequest } from "../../store/modules/user/action";

import { Container } from "./styles";

const Profile: React.FC = () => {
    const dispatch = useDispatch();
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
        // dispatch(UpdateProfileRequest(data));
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(submitForm)}>
                <AvatarInput
                    name="avatar_id"
                    register={register}
                    initialValue={userInfo.profile?.avatar}
                />
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
                    error={errors.oldPassword}
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="New Password"
                    register={register}
                    error={errors.password}
                />

                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    register={register}
                    error={errors.confirmPassword}
                />

                <button type="submit">Update</button>
            </form>

            <button type="button">Log out</button>
        </Container>
    );
};

export default Profile;
