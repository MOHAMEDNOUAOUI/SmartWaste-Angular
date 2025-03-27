    import { createReducer, on } from "@ngrx/store"
    import { Client, Utilisateur, Worker } from "../../Models/Utilisateur.modules"
    import { DeleteClient, DeleteClientFailure, DeleteClientSuccess, DeleteWorker, DeleteWorkerFailure, DeleteWorkerSuccess, Hire, HireFailed, HireSuccess, LoadAllClients, LoadAllClientsFailure, LoadAllClientsSuccess, LoadAllWorkers, LoadAllWorkersFailure, LoadAllWorkersSuccess, LoadAuthenticatedUser, LoadAuthenticatedUserFailure, LoadAuthenticatedUserSuccess } from "./UserActions"
import { ClearState } from "../Auth/AuthActions"

    export interface UserSt {
        loading:boolean
        data:Utilisateur | null
        Clients: Client[] | null
        Workers:Worker[] | null
        error:string
        pagination:Pagination | null
    }

    export interface Pagination {
        page: number;
        size: number;
        totalPages: number;
        totalElements: number;
    }

    export const UserState : UserSt = {
        loading:false,
        data:null,
        Clients:[],
        Workers:[],
        error:'',
        pagination:null
    }

    export const UserReducer = createReducer(
        UserState,
        on(LoadAuthenticatedUser, (state) => ({...state,loading:true})),
        on(LoadAuthenticatedUserSuccess , (state , {user}) => ({...state,data:user,loading:false})),
        on(LoadAuthenticatedUserFailure , (state , {error}) => ({...state,loading:false,error:error})),

        on(LoadAllClients , (state) => ({...state,loading:true})),
        on(LoadAllClientsSuccess , (state , {Clients , pageable}) => ({...state,loading:false,Clients:Clients , pagination:pageable})),
        on(LoadAllClientsFailure , (state , {error}) => ({...state,loading:false,error:error})),

        on(LoadAllWorkers , (state) => ({...state,loading:true})),
        on(LoadAllWorkersSuccess , (state , {Workers , pageable}) => ({...state,loading:false,Workers:Workers , pagination:pageable})),
        on(LoadAllWorkersFailure , (state , {error}) => ({...state,loading:false,error:error})),

        on(DeleteWorker , (state , {id}) => ({...state,error:''})),
        on(DeleteWorkerSuccess , (state , {Workers}) => ({...state,Workers:Workers})),
        on(DeleteWorkerFailure , (state , {error}) => ({...state,error:error})),

        on(DeleteClient , (state , {id}) => ({...state,error:''})),
        on(DeleteClientSuccess , (state , {Clients}) => ({...state,Clients:Clients})),
        on(DeleteClientFailure , (state , {error}) => ({...state,error:error})),
        on(ClearState , (state )=> ({...state,data:null,Clients:[],Workers:[],pagination:null,loading:false,error:''})),

        on(Hire , (state) => ({...state,loading:true,error:''})),
        on(HireSuccess , (state , {Clients , Workers}) => ({...state,loading:false,Clients:Clients  , Workers:Workers})),
        on(HireFailed , (state , {error}) => ({...state,loading:false,error:error.message}))
    )