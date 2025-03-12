import { createReducer, on } from "@ngrx/store"
import { Task } from "../../Models/Task.modules"
import { LoadTasksForLoggedUser, LoadTasksForLoggedUserFailure, LoadTasksForLoggedUserSuccess, resetSelectedTask, SelectTask, UpdateTask, UpdateTaskFailure, UpdateTasksList, UpdateTaskSuccess} from "./TasksActions"

export interface TasksState {
    loading:boolean
    data:Task[] | null
    selectedTask:Task | null
    error:Error | null
}


export const InitialState : TasksState = {
    loading:false,
    data:null,
    selectedTask:null,
    error:null
}

export const TasksReducer = createReducer(
    InitialState,
    on(LoadTasksForLoggedUser , (state) => ({...state,loading:true , selectedTask:null})),
    on(LoadTasksForLoggedUserSuccess , (state , {tasks}) => ({...state,data:tasks , loading:false})),
    on(LoadTasksForLoggedUserFailure , (state , {error}) => ({...state,loading:false,error:error})),
    on(SelectTask , (state , {task}) => ({...state,loading:true , selectedTask:task})),  
    on(resetSelectedTask , (state) => ({...state,selectedTask:null})),

    on(UpdateTask , (state , {task}) => ({...state,loading:true})),
    on(UpdateTaskSuccess , (state , {task}) => ({...state , loading:false , selectedTask:task})),
    on(UpdateTaskFailure , (state , {error}) => ({...state,loading:false , error:error})),
    on(UpdateTasksList , (state , {tasks}) => ({...state,data:tasks}))
)