import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { LoadTasksForLoggedUser, LoadTasksForLoggedUserFailure, LoadTasksForLoggedUserSuccess, SelectTask, UpdateTask, UpdateTaskFailure, UpdateTasksList, UpdateTaskSuccess } from "./TasksActions";
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { TaskService } from "./TaskService";
import { selectedTask, TasksForUser } from "./TaskSelector";

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
    
}