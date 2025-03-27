import { createReducer, on } from "@ngrx/store"
import { Roots } from "../../Models/Roots.modules"
import { CreateRoute, CreateRouteFailed, CreateRouteSuccess, LoadRoutes, LoadRoutesFailed, LoadRoutesSuccefully, LoadSelectedRoutes, LoadUserRoutes, LoadUserRoutesFailed, LoadUserRoutesSuccefully, ResetSelectedRoutes } from "./RoutesActions"
import { ClearState } from "../Auth/AuthActions"

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
    on(ResetSelectedRoutes , (state) => ({...state,selecteRoute:null})),
    on(ClearState , (state) => ({...state,data:null,loading:false,error:null})),
    on(LoadRoutes , (state) => ({...state,loading:true})),
    on(LoadRoutesSuccefully  , (state , {routes}) => ({...state,data:routes,loading:false})),
    on(LoadRoutesFailed , (state , {error}) => ({...state,error:error})),
    on(CreateRoute  ,(state) => ({...state,loading:true,error:null})),
    on(CreateRouteSuccess , (state , {routes}) => ({...state,loading:false,data:routes})),
    on(CreateRouteFailed , (state ,{error}) => ({...state,loading:false,error:error}))

)