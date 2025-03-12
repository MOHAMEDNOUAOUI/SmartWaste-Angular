import { createAction, props } from "@ngrx/store";
import { Admin, Client, Utilisateur } from "../../Models/Utilisateur.modules";
import { LoginResponse } from "./AuthReducer";

// export const Register = createAction('[Authentification] Register',props<{user:Utilisateur}>());
// export const RegisterSuccess = createAction('[Authentification] Register Succefully' , props<{user:Client}>());
// export const RegisterFailure = createAction('[Authentification] Register Failure' , props<{error:string}>());

export const Login = createAction('[Authentification] Login' , props<{email:string,password:string}>());
export const LoginSuccess = createAction('[Authetification] Login Succefully' , props<{token:LoginResponse}>());
export const LoginFailure = createAction('[Authentification] Login Failure' , props<{error:Error}>());
export const Logout = createAction('[Authentification] Log out');

export const LoadToken = createAction('[Token] Load token');
export const LoadTokenSuccess = createAction('[Token] Load token Success' ,props<{data:LoginResponse | null}>());
export const LoadTokenFailure = createAction('[Token] Load token Failure' , props<{error:Error}>());

export const ClearError = createAction('[Authentification] clear Error login');
