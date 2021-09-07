/**
 * Action types
 */
export enum AuthTypes {
    SIGN_IN_REQUEST = "@auth/SIGN_IN_REQUEST",
    SIGN_IN_SUCCESS = "@auth/SIGN_IN_SUCCESS",
    SIGN_FAILURE = "@auth/SIGN_FAILURE",
}

/**
 * Data types
 */
export interface SignInRequestPayload {
    email: string;
    password: string;
}

type User = {
    id: number;
    name: string;
    email: string;
};

export interface SignInSuccessPayload {
    token: string;
    user: User;
}

export interface SignInRequest {
    type: typeof AuthTypes.SIGN_IN_REQUEST;
    payload: SignInRequestPayload;
}

export interface AuthState {
    token: string | null;
    signed: boolean;
    loading: boolean;
}
