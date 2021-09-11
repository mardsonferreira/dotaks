import { action } from "typesafe-actions";
import {
    UserActions,
    UpdateProfileRequestPayload,
    UpdateProfileSuccessPayload,
} from "./types";

export const UpdateProfileRequest = (data: UpdateProfileRequestPayload) =>
    action(UserActions.UPDATE_PROFILE_REQUEST, data);

export const UpdateProfileSuccess = (data: UpdateProfileSuccessPayload) =>
    action(UserActions.UPDATE_PROFILE_SUCCESS, data);

export const UpdateProfileFailure = () =>
    action(UserActions.UPDATE_PROFILE_FAILURE);
