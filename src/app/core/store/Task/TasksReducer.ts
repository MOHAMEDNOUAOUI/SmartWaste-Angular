import { createReducer, on } from "@ngrx/store"
import { Task } from "../../Models/Task.modules"
import { CreateTask, CreateTaskFailed, CreateTaskSuccess, LoadAllTasks, LoadAllTasksFailed, LoadAllTasksSuccess, LoadTasksForLoggedUser, LoadTasksForLoggedUserFailure, LoadTasksForLoggedUserSuccess, resetSelectedTask, SelectTask, UpdateTask, UpdateTaskFailure, UpdateTasksList, UpdateTaskSuccess} from "./TasksActions"
import { ClearState } from "../Auth/AuthActions"
import { Pagination } from "../Utilisateur/UserReducer"

export interface TasksState {
    loading:boolean
    data:Task[] | null
    pagination:Pagination | null
    selectedTask:Task | null
    error:Error | null
}


export const InitialState : TasksState = {
    loading:false,
    data:null,
    pagination:null,
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
    on(UpdateTasksList , (state , {tasks}) => ({...state,data:tasks})),
    on(ClearState , (state )=> ({...state,data:null,loading:false,selectedTask:null,error:null})),


    on(LoadAllTasks , (state) => ({...state,loading:true,data:null})),
    on(LoadAllTasksSuccess, (state , {tasks , pageable}) =>({...state,loading:false,data:tasks , pagination:pageable})),
    on(LoadAllTasksFailed , (state , {error}) => ({...state,loading:false,error:error})),

    on(CreateTask , (state) => ({...state,loading:true})),
    on(CreateTaskSuccess , (state , {tasks}) => ({...state,loading:false,data:tasks})),
    on(CreateTaskFailed , (state , {error}) => ({...state,loading:false,error:error})),
)