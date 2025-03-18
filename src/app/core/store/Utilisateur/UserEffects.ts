import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../Auth/AuthService";
import { Store } from "@ngrx/store";
import { DeleteClient, DeleteClientFailure, DeleteClientSuccess, DeleteWorker, DeleteWorkerFailure, DeleteWorkerSuccess, LoadAllClients, LoadAllClientsFailure, LoadAllClientsSuccess, LoadAllWorkers, LoadAllWorkersFailure, LoadAllWorkersSuccess, LoadAuthenticatedUser, LoadAuthenticatedUserFailure, LoadAuthenticatedUserSuccess } from "./UserActions";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { UserService } from "./UserService";
import Swal from "sweetalert2";
import { AllClients, AllWorkers } from "./UserSelector";

@Injectable({
    providedIn:'root'
})
export class UserEffect{
 constructor(private userService:UserService , private store:Store , private action$:Actions){}

 user$ = createEffect(() =>
    this.action$.pipe(
      ofType(LoadAuthenticatedUser),
      switchMap(() => 
        this.userService.getAuthenticatedUser().pipe(
          map(user => LoadAuthenticatedUserSuccess({ user })),
          catchError(err => of(LoadAuthenticatedUserFailure({ error: err.message })))
        )
      )
    )
  );


  Clients$ = createEffect(() =>
    this.action$.pipe(
      ofType(LoadAllClients),
      switchMap(() =>
        this.userService.getAllClient().pipe(
          tap(response => console.log("API Response:", response)), // Debugging
          map(response =>
            LoadAllClientsSuccess({
              Clients: response.content,
              pagination: response.pagination,
            })
          ),
          catchError(error => {
            console.error("Error fetching clients:", error);
            return of(LoadAllClientsFailure({ error: error.message }));
          })
        )
      )
    )
  );
  

  Workers$ = createEffect(
    () => this.action$.pipe(
      ofType(LoadAllWorkers),
      switchMap(() => this.userService.getAllWorkers().pipe(
        map((response) => LoadAllWorkersSuccess({Workers:response.content,pagination:response.pagination})),
        catchError((error) => of(LoadAllWorkersFailure({error:error.message})))
      ))
    )
  )


  DeleteWorker$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeleteWorker),
      withLatestFrom(this.store.select(AllWorkers)),
      switchMap(([action, workers]) =>
        this.userService.deleteWorker(action.id).pipe(
          map((message) => {
            const updatedWorkers = workers ? workers.filter(worker => worker.id !== action.id) : [];
            Swal.fire('Success', message, 'success');
            return DeleteWorkerSuccess({ Workers: updatedWorkers });
          }),
          catchError((error) => {
            console.error('Deletion error:', error);
            Swal.fire('Error', 'Failed to delete worker', 'error');
            return of(DeleteWorkerFailure({ error: error.message || 'Unknown error' }));
          })
        )
      )
    )
  );

  DeleteClient$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeleteClient),
      withLatestFrom(this.store.select(AllClients)),
      switchMap(([action, clients]) =>
        this.userService.deleteClient(action.id).pipe(
          map((message) => {
            const updatedClients = clients ? clients.filter(client => client.id !== action.id) : [];
            Swal.fire('Success', message, 'success');
            return DeleteClientSuccess({ Clients: updatedClients });
          }),
          catchError((error) => {
            console.error('Deletion error:', error);
            Swal.fire('Error', 'Failed to delete client', 'error');
            return of(DeleteClientFailure({ error: error.message || 'Unknown error' }));
          })
        )
      )
    )
  );
  
  
  

 
}