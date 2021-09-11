import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { UserActions, UpdateProfileRequestType } from "./types";

import { UpdateProfileFailure, UpdateProfileSuccess } from "./action";

export function* updateProfile({ payload }: UpdateProfileRequestType) {
    try {
        const { name, email, ...rest } = payload;

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, "users", profile);

        toast.success("Profile updated!");

        yield put(UpdateProfileSuccess(response.data));
    } catch (err) {
        toast.error(`Error: profile not updated ${err}`);
        yield put(UpdateProfileFailure());
    }
}

export default all([
    takeLatest(UserActions.UPDATE_PROFILE_REQUEST, updateProfile),
]);
