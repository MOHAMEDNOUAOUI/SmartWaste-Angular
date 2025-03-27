import { createAction, props } from "@ngrx/store";
import { Task } from "../../Models/Task.modules";
import { Pagination } from "../Utilisateur/UserReducer";
import { FormGroup } from "@angular/forms";

export const LoadTasksForLoggedUser = createAction('[Tasks] Load Tasks For Logged User');
export const LoadTasksForLoggedUserSuccess = createAction('[Tasks] Load Tasks For Logged User Succefuly' , props<{tasks:Task[] | null}>());
export const LoadTasksForLoggedUserFailure = createAction('[Tasks] Load Tasks For Logged User Failed' , props<{error:Error}>());

export const SelectTask= createAction('[Tasks] Select Task Out of the Array' , props<{task:Task}>());
export const resetSelectedTask = createAction('[Tasks] Reset Selected Task');

export const UpdateTask = createAction('[Tasks] Update Task' , props<{task:Task}>());
export const UpdateTaskSuccess = createAction('[Tasks] Update Task Success' , props<{task:Task}>());
export const UpdateTaskFailure = createAction('[Tasks] Update Task Failed' , props<{error:Error}>());

export const UpdateTasksList = createAction('[Tasks] Update Tasks' , props<{tasks:Task[]}>())


export const LoadAllTasks = createAction('[Tasks] Load Tasks');
export const LoadAllTasksSuccess = createAction('[Tasks] Load Tasks Success' , props<{tasks:Task[] , pageable:Pagination}>());
export const LoadAllTasksFailed = createAction('[Tasks] Load Tasks Failed' , props<{error:Error}>());


export const CreateTask = createAction('[Tasks] Create Task', props<{task:FormGroup<any>}>());
export const CreateTaskSuccess = createAction('[Tasks] Create Task Success' , props<{tasks:Task[]}>());
export const CreateTaskFailed = createAction('[Tasks] Create Task Failed' , props<{error:Error}>());