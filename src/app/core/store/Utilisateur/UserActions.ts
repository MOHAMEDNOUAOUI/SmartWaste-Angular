import { createAction, props } from "@ngrx/store";
import { Client, Utilisateur, Worker } from "../../Models/Utilisateur.modules";
import { Pagination } from "./UserReducer";

export const LoadAuthenticatedUser = createAction('[Authentification] Load Authenticated User');
export const LoadAuthenticatedUserSuccess = createAction('[Authentification] Load Authenticated User Succefully' , props<{user:Utilisateur}>());
export const LoadAuthenticatedUserFailure = createAction('[Authentification] Load Authenticated User Failure' , props<{error:string}>());


export const LoadAllClients = createAction('[Clients] LoadAllClients')
export const LoadAllClientsSuccess = createAction(
    '[Clients] LoadAllClients Successfully',
    props<{ Clients: Client[]; pageable:Pagination}>()
  );
export const LoadAllClientsFailure = createAction('[Clients] LoadAllClients Failed' , props<{error:string}>())

export const LoadAllWorkers = createAction('[Workers] LoadAllWorkers')
export const LoadAllWorkersSuccess = createAction(
    '[Workers] LoadAllWorkers Succesfully' , 
    props<{Workers:Worker[]; pageable:Pagination}>()
);

export const LoadAllWorkersFailure = createAction('[Workers] LoadAllWorkers Failed' , props<{error:string}>())


export const DeleteWorker = createAction('[Worker] Delete Worker' , props<{id:number}>());
export const DeleteWorkerSuccess = createAction('[Worker] Delete Worker Success' , props<{Workers:Worker[]}>());
export const DeleteWorkerFailure = createAction('[Worker] Delete Worker Failure' , props<{error:string}>());


export const DeleteClient = createAction('[Client] Delete Client' , props<{id:number}>());
export const DeleteClientSuccess = createAction('[Client] Delete Client Success' , props<{Clients:Client[]}>());
export const DeleteClientFailure = createAction('[Client] Delete Client Failure' , props<{error:string}>());



export const Hire = createAction('[Worker / Client] Hire' , props<{client:Client}>());
export const HireSuccess = createAction('[Worker / Client] Hire Success' , props<{Clients:Client[] , Workers:Worker[]}>());
export const HireFailed = createAction('[Worker / Client] Hire Failed' , props<{error:Error}>());