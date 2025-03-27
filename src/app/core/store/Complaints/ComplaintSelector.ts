import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComplaintState } from './ComplaintReducer';
import { StatusComplaint } from '../../Models/enums/Enums';

export const selectComplaintsState = createFeatureSelector<ComplaintState>('Complaints');

export const selectAllComplaints = createSelector(selectComplaintsState, (state:ComplaintState) => state.complaints);
export const selectedComplaint = createSelector(selectComplaintsState , (state:ComplaintState) => state.selectedComplaint);
export const selectError = createSelector(selectComplaintsState, (state:ComplaintState) => state.error);
export const selectLoading = createSelector(selectComplaintsState, (state:ComplaintState) => state.loading);

export const UserComplaints = createSelector(
    selectComplaintsState,
    (state: ComplaintState) => state.complaints.filter(complaint => complaint.client.id === state.selectedComplaint?.client.id)
);

export const selectTotalComplaints = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.length)
export const selectCompletedComplaints = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.filter(complaint => complaint.status == 'RESOLVED').length);

export const ComplaintInProgress = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.filter(complaint => complaint.status == StatusComplaint.IN_PROGRESS).length ?? 0);
export const ComplaintPending = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.filter(complaint => complaint.status == StatusComplaint.PENDING).length ?? 0);
export const ComplaintClosed = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.filter(complaint => complaint.status == StatusComplaint.CLOSED).length ?? 0);
export const ComplaintResolved = createSelector(selectComplaintsState , (state:ComplaintState) => state.complaints.filter(complaint => complaint.status == StatusComplaint.RESOLVED).length ?? 0);
