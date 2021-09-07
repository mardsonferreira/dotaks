import { action } from "typesafe-actions";
import { AuthTypes, SignInRequestPayload, SignInSuccessPayload } from "./types";

export const signInRequest = (data: SignInRequestPayload) =>
    action(AuthTypes.SIGN_IN_REQUEST, data);

export const signInSuccess = (data: SignInSuccessPayload) =>
    action(AuthTypes.SIGN_IN_SUCCESS, data);

export const signInFailure = () => action(AuthTypes.SIGN_FAILURE);

// export function signInRequest() {
//     return {
//         type: "@auth/SIGN_IN_REQUEST",
//         payload: { email, password },
//     };
// }

// export function signInSuccess(token, user) {
//     return {
//         type: "@auth/SIGN_IN_SUCCESS",
//         payload: { token, user },
//     };
// }

// export function signFailure() {
//     return {
//         type: "@auth/SIGN_FAILURE",
//     };
// }
