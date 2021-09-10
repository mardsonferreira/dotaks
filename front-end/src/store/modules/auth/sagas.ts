import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
    AuthTypes,
    SignInRequest,
    SignUpRequest,
    PersistRequest,
} from "./types";

import api from "../../../services/api";
import history from "../../../services/history";

import { signInSuccess, signInFailure } from "./actions";

export function* signIn({ payload }: SignInRequest) {
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

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess({ token, user }));

        history.push("/dashboard");
    } catch (err) {
        toast.error("Authentication fails!");
        yield put(signInFailure());
    }
}

export function* signUp({ payload }: SignUpRequest) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, "users", {
            name,
            email,
            password,
        });

        history.push("/");
    } catch (err) {
        toast.error("Create account failed!");
        yield put(signInFailure());
    }
}

export function setToken({ payload }: PersistRequest) {
    if (!payload) {
        return;
    }

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest("persist/REHYDRATE", setToken),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
]);
