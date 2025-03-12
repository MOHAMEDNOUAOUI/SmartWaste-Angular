
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComplaintState } from './ComplaintReducer';

export const selectComplaintsState = createFeatureSelector<ComplaintState>('Complaints');

export const selectAllComplaints = createSelector(selectComplaintsState, (state:ComplaintState) => state.data);
export const selectedComplaint = createSelector(selectComplaintsState , (state:ComplaintState) => state.selectedComplaint);
export const selectError = createSelector(selectComplaintsState, (state:ComplaintState) => state.error);
export const selectLoading = createSelector(selectComplaintsState, (state:ComplaintState) => state.loading);
