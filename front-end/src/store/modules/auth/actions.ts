import { action } from "typesafe-actions";
import {
    AuthTypes,
    SignInRequestPayload,
    SignInSuccessPayload,
    SignUpRequestPayload,
} from "./types";

export const signInRequest = (data: SignInRequestPayload) =>
    action(AuthTypes.SIGN_IN_REQUEST, data);

export const signInSuccess = (data: SignInSuccessPayload) =>
    action(AuthTypes.SIGN_IN_SUCCESS, data);

export const signInFailure = () => action(AuthTypes.SIGN_FAILURE);

export const signUpRequest = (data: SignUpRequestPayload) =>
    action(AuthTypes.SIGN_UP_REQUEST, data);
