import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./TasksReducer";
import { TaskStatut } from "../../Models/enums/Enums";

export const taskstate = createFeatureSelector<TasksState>('Tasks');
export const TasksForUser = createSelector(
    taskstate,
    (state:TasksState) => state.data
)
export const selectedTask = createSelector(
    taskstate,
    (state:TasksState) => state.selectedTask
)
export const AllTasks = createSelector(
    taskstate,
    (state:TasksState) => state.data
)
export const TasksTotal = createSelector(
    taskstate,
    (state:TasksState) => {
        return state.data?.length
    }
)
export const TasksToDoTotal = createSelector(
    taskstate,
    (state:TasksState) => state.data?.filter((task) => task.taskStatus == TaskStatut.To_DO).length ?? 0
)
export const TasksCanceledTotal = createSelector(
    taskstate,
    (state:TasksState) => state.data?.filter((task) => task.taskStatus == TaskStatut.Cancelled).length ?? 0
)
export const TasksCompletedTotal = createSelector(
    taskstate,
    (state:TasksState) => state.data?.filter((task) => task.taskStatus == TaskStatut.Completed).length ?? 0
)
export const TasksFailedTotal = createSelector(
    taskstate,
    (state:TasksState) => state.data?.filter((task) => task.taskStatus == TaskStatut.Failed).length ?? 0
)
export const TasksInProgressTotal = createSelector(
    taskstate,
    (state:TasksState) => state.data?.filter((task) => task.taskStatus == TaskStatut.In_Progress).length ?? 0
)