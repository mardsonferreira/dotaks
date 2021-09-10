import { Reducer } from "redux";

import { AuthTypes } from "../auth/types";
import { UserState } from "../../types";

const INITIAL_STATE: UserState = {
    profile: null,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.SIGN_IN_SUCCESS:
            return { ...state, profile: action.payload.user };
        default:
            return state;
    }
};

export default reducer;
