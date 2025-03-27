import { createReducer, on } from "@ngrx/store"
import {ClearError, ClearState, LoadToken, LoadTokenFailure, LoadTokenSuccess, Login, LoginFailure, LoginSuccess, Logout } from "./AuthActions"


export interface LoginResponse {
    token:string
}

export interface AuthState {
    loading:boolean
    data:string | null
    error:Error | null
}

export const AuthentificationState : AuthState =  {
    loading:false,
    data:null,
    error:null
}

export const AuthentificationReducer = createReducer(
    AuthentificationState,
    //login
    on(Login,(state) => ({...state,loading:true})),
    on(LoginSuccess,(state , {token}) => ({...state,loading:false,token:token})),
    on(LoginFailure , (state , {error}) => ({...state,error:error , loading:false})),
    on(ClearError , (state) => ({...state,error:null})),
    on(LoadToken , (state) => ({...state,loading:true})),
    on(LoadTokenSuccess , (state , {data}) => ({...state,data:data , loading:false})),
    on(LoadTokenFailure , (state , {error}) => ({...state,loading:false,error:error})),
    on(Logout , (state) => ({...state,data:null})),
    on(ClearState , (state) => ({...state,data:null,error:null,loading:false}))
)