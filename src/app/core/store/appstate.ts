import { AuthEffects } from "./Auth/AuthEffects";
import { AuthState } from "./Auth/AuthReducer";
import { ComplaintState } from "./Complaints/ComplaintReducer";
import { RoutesState } from "./Roots/RoutesReducer";
import { TasksState } from "./Task/TasksReducer";
import { UserEffect } from "./Utilisateur/UserEffects";
import { UserSt } from "./Utilisateur/UserReducer";

export interface AppSate{
    Auth:AuthState
    User:UserSt
    Tasks:TasksState
    Complaints:ComplaintState
    Routes:RoutesState
}

export interface AppEffects {
    Auth:AuthEffects
    User:UserEffect
}