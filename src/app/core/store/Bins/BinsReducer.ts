import { createReducer, on } from "@ngrx/store";
import { Bins } from "../../Models/Bins.modules";
import { LoadAllBins, LoadAllBinsFailure, LoadAllBinsSuccess } from "./BinsActions";

export interface BinsState {
    data:Bins[] | []
    loading:boolean
    error:Error | null
    selectedbin:Bins | null
}

export const InitialState : BinsState ={
    data:[],
    loading:false,
    error:null,
    selectedbin:null
}

export const BinsReducer = createReducer(
    InitialState,
    on(LoadAllBins , (state) => ({...state,loading:true})),
    on(LoadAllBinsSuccess , (state , {bins}) => ({...state,loading:false,data:bins})),
    on(LoadAllBinsFailure , (state , {error}) => ({...state,loading:false,error:error}))
)