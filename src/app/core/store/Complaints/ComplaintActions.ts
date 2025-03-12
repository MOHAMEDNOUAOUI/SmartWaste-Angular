import { createAction, props } from '@ngrx/store';
import { Complaints } from '../../Models/Complaints.modules';

export const loadEmployeeComplaint = createAction('[Complaint] Load Employee Complaint');
export const loadEmployeeComplaintSuccess = createAction('[Complaint] Load Employee Complaint Success', props<{ Complaints: Complaints[] }>());
export const loadEmployeeComplaintFailure = createAction('[Complaint] Load Employee Complaint Failure', props<{ error: Error }>());

export const SelectComplaint = createAction('[Complaint] Select Complaint' , props<{complaint:Complaints}>());
export const ResetComplaint = createAction('[Complaint] Reset Complaint');
