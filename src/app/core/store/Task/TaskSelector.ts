import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./TasksReducer";

export const taskstate = createFeatureSelector<TasksState>('Tasks');
export const TasksForUser = createSelector(
    taskstate,
    (state:TasksState) => state.data
)
export const selectedTask = createSelector(
    taskstate,
    (state:TasksState) => state.selectedTask
)