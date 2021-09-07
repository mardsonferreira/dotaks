import { takeLatest, call, put, all } from "redux-saga/effects";
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
            console.log("error");
            return;
        }

        yield put(signInSuccess({ token, user }));

        history.push("/dashboard");
    } catch (err) {
        yield put(signInFailure());
    }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
