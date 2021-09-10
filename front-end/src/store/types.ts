import { User } from "./modules/user/types";
export interface AuthState {
    token: string | null;
    signed: boolean;
    loading: boolean;
}

export interface UserState {
    profile: User | null;
}
export interface ApplicationState {
    auth: AuthState;
    user: UserState;
}
