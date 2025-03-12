import { createAction, props } from "@ngrx/store";
import { Utilisateur } from "../../Models/Utilisateur.modules";

export const LoadAuthenticatedUser = createAction('[Authentification] Load Authenticated User');
export const LoadAuthenticatedUserSuccess = createAction('[Authentification] Load Authenticated User Succefully' , props<{user:Utilisateur}>());
export const LoadAuthenticatedUserFailure = createAction('[Authentification] Load Authenticated User Failure' , props<{error:string}>());

