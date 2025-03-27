import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VehiculeState } from "./VehiculeReducer";

export const state = createFeatureSelector<VehiculeState>('Vehicules');
export const VehicluesSelector = createSelector(
    state,
    (state:VehiculeState) => state.data
)