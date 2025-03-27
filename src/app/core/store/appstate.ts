import { AuthEffects } from "./Auth/AuthEffects";
import { AuthState } from "./Auth/AuthReducer";
import { BinsState } from "./Bins/BinsReducer";
import { ComplaintState } from "./Complaints/ComplaintReducer";
import { RoutesState } from "./Roots/RoutesReducer";
import { TasksState } from "./Task/TasksReducer";
import { UserEffect } from "./Utilisateur/UserEffects";
import { UserSt } from "./Utilisateur/UserReducer";
import { VehiculeState } from "./Vehicule/VehiculeReducer";

export interface AppSate{
    Auth:AuthState
    User:UserSt
    Tasks:TasksState
    Complaints:ComplaintState
    Routes:RoutesState
    Vehicules:VehiculeState
    Bins:BinsState
}

export interface AppEffects {
    Auth:AuthEffects
    User:UserEffect
}