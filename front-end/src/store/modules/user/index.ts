import { Reducer } from "redux";

import { AuthTypes } from "../auth/types";
import { UserState } from "../../types";
import { UserActions } from "./types";

const INITIAL_STATE: UserState = {
    profile: null,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.SIGN_IN_SUCCESS:
            return { ...state, profile: action.payload.user };
        case UserActions.UPDATE_PROFILE_SUCCESS:
            return { ...state, profile: action.payload };
        case AuthTypes.SIGN_OUT:
            return { ...state, profile: null };
        default:
            return state;
    }
};

export default reducer;
