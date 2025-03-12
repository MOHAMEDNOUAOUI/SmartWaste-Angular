import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoutesState } from "./RoutesReducer";

export const routesState = createFeatureSelector<RoutesState>('Routes');
export const routesDate = createSelector(
    routesState,
    (state:RoutesState) => state.data
)
export const selecteRoute = createSelector(
    routesState,
    (state:RoutesState) => state.selecteRoute
)