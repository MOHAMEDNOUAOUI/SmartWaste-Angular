import { createAction, props } from '@ngrx/store';
import { Pagination } from '../Utilisateur/UserReducer';
import { Complaints, ComplaintsCreateDTO } from '../../Models/Complaints.modules';

export const loadEmployeeComplaint = createAction('[Complaint] Load Employee Complaint');
export const loadEmployeeComplaintSuccess = createAction('[Complaint] Load Employee Complaint Success', props<{ complaints: Complaints[] }>());
export const loadEmployeeComplaintFailure = createAction('[Complaint] Load Employee Complaint Failure', props<{ error: any }>());

export const loadComplaint = createAction('[Complaint] Load Complaint');
export const loadComplaintSuccess = createAction('[Complaint] Load Complaint Success', props<{ complaints: Complaints[], pageable: Pagination }>());
export const loadComplaintFailure = createAction('[Complaint] Load Complaint Failure', props<{ error: any }>());

export const SelectComplaint = createAction('[Complaint] Select Complaint', props<{ complaint: Complaints }>());
export const ResetComplaint = createAction('[Complaint] Reset Complaint');

export const UpdateComplaintStatus = createAction('[Complaint] Update Status', props<{ complaint: Complaints }>());
export const UpdateComplaintStatusSuccess = createAction('[Complaint] Update Status Success', props<{ complaint: Complaints }>());
export const UpdateComplaintStatusFailure = createAction('[Complaint] Update Status Failure', props<{ error: any }>());
export const UpdateUpdateComplaintList = createAction('[Complaint] Update Complaints', props<{ complaints: Complaints[] }>());

export const CreateComplaint = createAction(
    '[Complaint] Create Complaint',
    props<{ complaint: ComplaintsCreateDTO }>()
);

export const CreateComplaintSuccess = createAction(
    '[Complaint] Create Complaint Success',
    props<{ complaints: Complaints[] }>()
);

export const CreateComplaintFailure = createAction(
    '[Complaint] Create Complaint Failure',
    props<{ error: any }>()
);

export const LoadAllComplaints = createAction(
    '[Complaint] Load All Complaints'
);

export const LoadAllComplaintsSuccess = createAction(
    '[Complaint] Load All Complaints Success',
    props<{ complaints: Complaints[] }>()
);

export const LoadAllComplaintsFailure = createAction(
    '[Complaint] Load All Complaints Failure',
    props<{ error: any }>()
);

export const LoadUserComplaints = createAction(
    '[Complaint] Load User Complaints',
);

export const LoadUserComplaintsSuccess = createAction(
    '[Complaint] Load User Complaints Success',
    props<{ complaints: Complaints[] }>()
);

export const LoadUserComplaintsFailure = createAction(
    '[Complaint] Load User Complaints Failure',
    props<{ error: Error }>()
);
