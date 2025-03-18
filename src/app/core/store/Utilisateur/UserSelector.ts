import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserSt } from "./UserReducer";

export const userstate = createFeatureSelector<UserSt>('User');
export const User = createSelector(
    userstate,
    (state:UserSt) => state.data
)
export const AllClients = createSelector(
    userstate,
    (state:UserSt) => state.Clients
)
export const AllWorkers = createSelector(
    userstate,
    (state:UserSt) => state.Workers
)