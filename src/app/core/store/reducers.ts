import { ActionReducerMap } from "@ngrx/store";
import { AppSate } from "./appstate";
import { AuthentificationReducer } from "./Auth/AuthReducer";
import { UserReducer } from "./Utilisateur/UserReducer";
import { TasksReducer } from "./Task/TasksReducer";
import { ComplaintsReducer } from "./Complaints/ComplaintReducer";
import { RoutesReducer } from "./Roots/RoutesReducer";

export const reducers:ActionReducerMap<AppSate>  = {
    Auth:AuthentificationReducer,
    User:UserReducer,
    Tasks:TasksReducer,
    Complaints:ComplaintsReducer,
    Routes:RoutesReducer
}