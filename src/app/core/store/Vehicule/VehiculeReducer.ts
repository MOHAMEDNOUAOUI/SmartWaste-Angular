import { createReducer, on } from "@ngrx/store"
import { Vehicule } from "../../Models/Vehicule.modules"
import { Pagination } from "../Utilisateur/UserReducer"
import { initialState } from "../Complaints/ComplaintReducer"
import { CreateVehicule, CreateVehiculeFailed, CreateVehiculeSuccess, LoadAllVehicules, LoadAllVehiculesFailed, LoadAllVehiculesSuccess } from "./VehiculeActions"
import { loadComplaint } from "../Complaints/ComplaintActions"

export interface VehiculeState {
    loading:boolean
    data:Vehicule[] | null
    pagination:Pagination | null
    selectedVehicule:Vehicule | null
    error:Error | null
}


export const InitialState : VehiculeState = {
    loading:false,
    data:null,
    pagination:null,
    selectedVehicule:null,
    error:null
}

export const VehiculesReducer = createReducer(
    InitialState,
    on(LoadAllVehicules , (state) => ({...state,loading:true})),
    on(LoadAllVehiculesSuccess , (state , {vehicules}) => ({...state,loading:false,data:vehicules})),
    on(LoadAllVehiculesFailed , (state , {error}) => ({...state,loading:false,error:error})),
    on(CreateVehicule , (state) => ({...state,loading:true,error:null})),
    on(CreateVehiculeSuccess , (state , {vehicules}) => ({...state,loading:false,data:vehicules})),
    on(CreateVehiculeFailed , (state , {error}) => ({...state,loading:false,error:error}))
)