import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BinsState } from "./BinsReducer";

export const bins = createFeatureSelector<BinsState>('Bins');
export const AllBins = createSelector(
    bins,
    (state:BinsState) => state.data
)