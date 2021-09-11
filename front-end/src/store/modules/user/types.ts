import { Action } from "redux";
export interface User {
    id: number;
    name: string;
    email: string;
}

export enum UserActions {
    UPDATE_PROFILE_REQUEST = "@user/UPDATE_PROFILE_REQUEST",
    UPDATE_PROFILE_SUCCESS = "@user/UPDATE_PROFILE_SUCCESS",
    UPDATE_PROFILE_FAILURE = "@user/UPDATE_PROFILE_FAILURE",
}

/**
 * Payloads
 */
export interface UpdateProfileRequestPayload {
    name: string;
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

export interface UpdateProfileSuccessPayload {
    name: string;
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

/**
 * Actions
 */
export interface UpdateProfileRequestType extends Action {
    type: typeof UserActions.UPDATE_PROFILE_REQUEST;
    payload: UpdateProfileRequestPayload;
}
