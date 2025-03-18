import { createAction, props } from '@ngrx/store';
import { Complaints } from '../../Models/Complaints.modules';

export const loadEmployeeComplaint = createAction('[Complaint] Load Employee Complaint');
export const loadEmployeeComplaintSuccess = createAction('[Complaint] Load Employee Complaint Success', props<{ Complaints: Complaints[] }>());
export const loadEmployeeComplaintFailure = createAction('[Complaint] Load Employee Complaint Failure', props<{ error: Error }>());

export const SelectComplaint = createAction('[Complaint] Select Complaint' , props<{complaint:Complaints}>());
export const ResetComplaint = createAction('[Complaint] Reset Complaint');

export const UpdateComplaintStatus = createAction('[Complaint] Update Status' , props<{complaint:Complaints}>());
export const UpdateComplaintStatusSuccess = createAction('[Complaint] Update Status Success' , props<{complaint:Complaints}>())
export const UpdateComplaintStatusFailure = createAction('[Complaint] Update Status Failure', props<{error:Error}>())
export const UpdateUpdateComplaintList = createAction('[Complaint] Update Comaplaints' , props<{complaints:Complaints[]}>())
