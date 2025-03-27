import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserSt } from "./UserReducer";
import { state } from "@angular/animations";

export const userstate = createFeatureSelector<UserSt>('User');
export const User = createSelector(
    userstate,
    (state:UserSt) => state.data
)
export const UserRole = createSelector(
    userstate,
    (state:UserSt) => state.data?.rrole
)
export const AllClients = createSelector(
    userstate,
    (state:UserSt) => state.Clients
)
export const AllWorkers = createSelector(
    userstate,
    (state:UserSt) => state.Workers
)

export const ClientsTotal = createSelector(
    userstate,
    (state:UserSt) => state.Clients?.length ?? 0
)

export const WorkersTotal = createSelector(
    userstate,
    (state:UserSt) => state.Workers?.length ?? 0
)

export const totalUsers = createSelector(
    userstate,
    (state: UserSt) => (state.Workers?.length ?? 0) + (state.Clients?.length ?? 0)
);
