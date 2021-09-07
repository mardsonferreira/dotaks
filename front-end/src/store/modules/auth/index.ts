import { Reducer } from "redux";

import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE: AuthState = {
    token: null,
    signed: false,
    loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.SIGN_IN_SUCCESS:
            return { ...state, token: action.payload.token, signed: true };
        case AuthTypes.SIGN_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default reducer;