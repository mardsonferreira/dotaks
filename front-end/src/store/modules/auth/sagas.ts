import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import { AnyAction } from "redux";

import { AuthTypes } from "./types";

import api from "../../../services/api";
import history from "../../../services/history";

import { signInSuccess, signInFailure } from "./actions";

export function* signIn({ payload }: AnyAction) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, "/sessions", {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user) {
            toast.error("User not found!");
            return;
        }

        yield put(signInSuccess({ token, user }));

        history.push("/dashboard");
    } catch (err) {
        toast.error("Authentication fails!");
        yield put(signInFailure());
    }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
