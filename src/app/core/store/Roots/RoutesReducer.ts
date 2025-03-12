import { createReducer, on } from "@ngrx/store"
import { Roots } from "../../Models/Roots.modules"
import { LoadSelectedRoutes, LoadUserRoutes, LoadUserRoutesFailed, LoadUserRoutesSuccefully, ResetSelectedRoutes } from "./RoutesActions"

export interface RoutesState {
    loading:boolean
    data:Roots[] | null
    selecteRoute:Roots | null
    error:Error | null
}


export const InitialState : RoutesState = {
    loading:false,
    data:null,
    selecteRoute:null,
    error:null
}

export const RoutesReducer = createReducer(
    InitialState,
    on(LoadUserRoutes , (state) => ({...state,loading:true})),
    on(LoadUserRoutesSuccefully  , (state , {routes}) => ({...state,data:routes,loading:false})),
    on(LoadUserRoutesFailed , (state , {error}) => ({...state,error:error})),
    on(LoadSelectedRoutes , (state , {route}) => ({...state,selecteRoute:route})),
    on(ResetSelectedRoutes , (state) => ({...state,selecteRoute:null}))
)