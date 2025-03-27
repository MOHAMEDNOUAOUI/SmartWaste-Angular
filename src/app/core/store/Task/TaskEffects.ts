import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CreateTask, CreateTaskFailed, CreateTaskSuccess, LoadAllTasks, LoadAllTasksFailed, LoadAllTasksSuccess, LoadTasksForLoggedUser, LoadTasksForLoggedUserFailure, LoadTasksForLoggedUserSuccess, SelectTask, UpdateTask, UpdateTaskFailure, UpdateTasksList, UpdateTaskSuccess } from "./TasksActions";
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { TaskService } from "./TaskService";
import { AllTasks, selectedTask, TasksForUser } from "./TaskSelector";
import { Task } from "../../Models/Task.modules";

@Injectable({
    providedIn:'root'
})
export class TasksEffect {
    constructor(private store:Store , private Taskservice:TaskService , private action$:Actions){}

    $userTasks =createEffect(
        () => this.action$.pipe(
            ofType(LoadTasksForLoggedUser),
            switchMap(() => this.Taskservice.getUserTasks().pipe(
                map((tasks) => LoadTasksForLoggedUserSuccess({tasks:tasks})),
                catchError((error) => of(LoadTasksForLoggedUserFailure({error:error})))
            ))
        )
    )

    $updateTask  = createEffect(
        () => this.action$.pipe(
            ofType(UpdateTask),
            switchMap((action) => this.Taskservice.updateTask(action.task).pipe(
                map((task) => UpdateTaskSuccess({task:task})),
                catchError((error) => of(UpdateTaskFailure({error:error}))) 
            ))
        )
    )


    updateTasks$ = createEffect(() =>
        this.action$.pipe(
            ofType(UpdateTaskSuccess),
            withLatestFrom(this.store.select(TasksForUser)),
            filter(([_, tasks]) => !!tasks),
            map(([action, tasks]) => {
                const updatedTasks = (tasks ?? []).map(task =>
                    task.id === action.task.id ? { ...task, ...action.task } : task
                );
                return UpdateTasksList({ tasks: updatedTasks });
            })
        )
    );


    AllTasks$ = createEffect(() =>
        this.action$.pipe(
          ofType(LoadAllTasks),
          switchMap(() =>
            this.Taskservice.getTasks().pipe(
              map((response) =>
                LoadAllTasksSuccess({ tasks: response.content, pageable: response.pageable })
              ),
              catchError((error) => {
                console.error('Error in getTasks:', error);
                return of(LoadAllTasksFailed({ error: error }));
              })
            )
          )
        )
      );


      CreateTask$ = createEffect(
        () =>this.action$.pipe(
            ofType(CreateTask),
            withLatestFrom(this.store.select(AllTasks)),
            switchMap(([action , TasksForUser]) => this.Taskservice.createTask(action.task).pipe(
                map((newTask:Task) => {
                    const updatedTasks = [...(TasksForUser || []) , newTask];
                    return CreateTaskSuccess({tasks:updatedTasks});
                }),
                catchError((error) => of(CreateTaskFailed({error:error})))
            ))
        )
      )
      
      
    
}