import { createReducer, on } from '@ngrx/store';
import { Complaints } from '../../Models/Complaints.modules';
import { loadEmployeeComplaint, loadEmployeeComplaintFailure, loadEmployeeComplaintSuccess, ResetComplaint, SelectComplaint } from './ComplaintActions';


export interface ComplaintState {
  data: Complaints[];
  selectedComplaint:Complaints |null,
  error: Error | null;
  loading: boolean;
}

export const initialState: ComplaintState = {
  data: [],
  selectedComplaint:null,
  error: null,
  loading: false,
};

export const ComplaintsReducer = createReducer(
  initialState,
  on(loadEmployeeComplaint, (state) => ({ ...state, loading: true })),
  on(loadEmployeeComplaintSuccess, (state, { Complaints }) => ({ ...state, loading: false, data:Complaints })),
  on(loadEmployeeComplaintFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(SelectComplaint,(state , {complaint}) => ({...state,selectedComplaint:complaint})),
  on(ResetComplaint , (state) => ({...state,selectedComplaint:null}))
);
 