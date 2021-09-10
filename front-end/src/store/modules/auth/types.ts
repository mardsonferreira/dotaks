import { Action } from "redux";
import { User } from "../user/types";

/**
 * Action types
 */
export enum AuthTypes {
    SIGN_IN_REQUEST = "@auth/SIGN_IN_REQUEST",
    SIGN_UP_REQUEST = "@auth/SIGN_UP_REQUEST",
    SIGN_IN_SUCCESS = "@auth/SIGN_IN_SUCCESS",
    SIGN_FAILURE = "@auth/SIGN_FAILURE",
}

export interface SignInRequestPayload {
    email: string;
    password: string;
}

export interface SignInRequest extends Action {
    type: typeof AuthTypes.SIGN_IN_REQUEST;
    payload: SignInRequestPayload;
}

export interface SignInSuccessPayload {
    token: string;
    user: User;
}

export interface SignUpRequestPayload {
    name: string;
    email: string;
    password: string;
}

export interface SignUpRequest {
    type: typeof AuthTypes.SIGN_UP_REQUEST;
    payload: SignUpRequestPayload;
}

export interface AuthState {
    token: string | null;
    signed: boolean;
    loading: boolean;
}
