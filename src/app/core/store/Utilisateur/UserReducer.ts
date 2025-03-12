import { createReducer, on } from "@ngrx/store"
import { Utilisateur } from "../../Models/Utilisateur.modules"
import { LoadAuthenticatedUser, LoadAuthenticatedUserFailure, LoadAuthenticatedUserSuccess } from "./UserActions"

export interface UserSt {
    loading:boolean
    data:Utilisateur |null
    error:string
}

export const UserState : UserSt = {
    loading:false,
    data:null,
    error:''
}

export const UserReducer = createReducer(
    UserState,
    on(LoadAuthenticatedUser, (state) => ({...state,loading:true})),
    on(LoadAuthenticatedUserSuccess , (state , {user}) => ({...state,data:user,loading:false})),
    on(LoadAuthenticatedUserFailure , (state , {error}) => ({...state,loading:false,error:error}))
)