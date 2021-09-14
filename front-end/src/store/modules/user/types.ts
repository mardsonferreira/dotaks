import { Action } from "redux";

export interface Avatar {
    id: number;
    path: string;
    url: string;
}
export interface User {
    id: number;
    name: string;
    email: string;
    avatar: Avatar | null;
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
    avatarId: number | null;
}

export interface UpdateProfileSuccessPayload {
    name: string;
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
    avatarId: number | null;
}

/**
 * Actions
 */
export interface UpdateProfileRequestType extends Action {
    type: typeof UserActions.UPDATE_PROFILE_REQUEST;
    payload: UpdateProfileRequestPayload;
}
