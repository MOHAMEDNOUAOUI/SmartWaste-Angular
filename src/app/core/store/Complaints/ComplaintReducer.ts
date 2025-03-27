import { createReducer, on } from '@ngrx/store';
import { loadComplaint, loadComplaintFailure, loadComplaintSuccess, loadEmployeeComplaint, loadEmployeeComplaintFailure, loadEmployeeComplaintSuccess, ResetComplaint, SelectComplaint, UpdateComplaintStatus, UpdateComplaintStatusFailure, UpdateComplaintStatusSuccess, UpdateUpdateComplaintList, CreateComplaintSuccess, CreateComplaintFailure, LoadAllComplaintsSuccess, LoadUserComplaints, LoadUserComplaintsSuccess, LoadUserComplaintsFailure } from './ComplaintActions';
import { ClearState } from '../Auth/AuthActions';
import { Complaints } from '../../Models/Complaints.modules';


export interface ComplaintState {
  complaints: Complaints[];
  selectedComplaint: Complaints | null;
  error: any;
  loading: boolean;
}

export const initialState: ComplaintState = {
  complaints: [],
  selectedComplaint: null,
  error: null,
  loading: false,
};

export const ComplaintsReducer = createReducer(
  initialState,
  on(loadEmployeeComplaint, (state) => ({ ...state, loading: true })),
  on(loadEmployeeComplaintSuccess, (state, { complaints }) => ({ ...state, loading: false, complaints })),
  on(loadEmployeeComplaintFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(loadComplaint, (state) => ({ ...state, loading: true })),
  on(loadComplaintSuccess, (state, { complaints }) => ({ ...state, loading: false, complaints })),
  on(loadComplaintFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(SelectComplaint, (state, { complaint }) => ({ ...state, selectedComplaint: complaint })),
  on(ResetComplaint, (state) => ({ ...state, selectedComplaint: null })),
  on(UpdateComplaintStatus, (state) => ({ ...state, loading: true })),
  on(UpdateComplaintStatusSuccess, (state, { complaint }) => ({ ...state, loading: false, selectedComplaint: complaint })),
  on(UpdateComplaintStatusFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UpdateUpdateComplaintList, (state, { complaints }) => ({ ...state, complaints })),
  on(ClearState, (state) => ({ ...state, complaints: [], loading: false, error: null })),
  on(LoadAllComplaintsSuccess, (state, { complaints }) => ({
    ...state,
    complaints,
    loading: false,
    error: null
  })),
  on(CreateComplaintSuccess, (state, { complaints }) => ({
    ...state,
    complaints,
    loading: false,
    error: null
  })),
  on(CreateComplaintFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(LoadUserComplaints , (state) => ({...state,loading:true,error:null})),
  on(LoadUserComplaintsSuccess , (state , {complaints}) => ({...state,loading:false,complaints:complaints})),
  on(LoadUserComplaintsFailure , (state , {error}) => ({...state,loading:false,error:error}))
);
 