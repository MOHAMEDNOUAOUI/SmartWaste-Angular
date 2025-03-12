import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./AuthReducer";

export const authstate = createFeatureSelector<AuthState>('Auth');
export const authError = createSelector(
    authstate,
    (state:AuthState) => state.error
)
export const Token = createSelector(
    authstate,
    (state:AuthState) => state.data?.token || null
)
export const RefreshToken = createSelector(
    authstate,
    (state:AuthState) => state.data?.refreshToken || null
)