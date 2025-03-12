import { createAction, props } from "@ngrx/store";
import { Task } from "../../Models/Task.modules";

export const LoadTasksForLoggedUser = createAction('[Tasks] Load Tasks For Logged User');
export const LoadTasksForLoggedUserSuccess = createAction('[Tasks] Load Tasks For Logged User Succefuly' , props<{tasks:Task[] | null}>());
export const LoadTasksForLoggedUserFailure = createAction('[Tasks] Load Tasks For Logged User Failed' , props<{error:Error}>());

export const SelectTask= createAction('[Tasks] Select Task Out of the Array' , props<{task:Task}>());
export const resetSelectedTask = createAction('[Tasks] Reset Selected Task');

export const UpdateTask = createAction('[Tasks] Update Task' , props<{task:Task}>());
export const UpdateTaskSuccess = createAction('[Tasks] Update Task Success' , props<{task:Task}>());
export const UpdateTaskFailure = createAction('[Tasks] Update Task Failed' , props<{error:Error}>());

export const UpdateTasksList = createAction('[Tasks] Update Tasks' , props<{tasks:Task[]}>())