import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserSt } from "./UserReducer";

export const userstate = createFeatureSelector<UserSt>('User');
export const User = createSelector(
    userstate,
    (state:UserSt) => state.data
)