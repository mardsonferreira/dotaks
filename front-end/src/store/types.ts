import { TypedUseSelectorHook, useSelector } from "react-redux";
import { User } from "./modules/user/types";
export interface AuthState {
    token: string | null;
    signed: boolean;
    loading: boolean;
}

export interface UserState {
    profile: User | null;
}
export interface RootState {
    auth: AuthState;
    user: UserState;
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
