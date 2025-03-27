import { createAction, props } from "@ngrx/store";
import { Bins } from "../../Models/Bins.modules";

export const LoadAllBins = createAction('[Bins] Load All Bins');
export const LoadAllBinsSuccess = createAction('[Bins] Load All Bins Success', props<{ bins: Bins[] }>());
export const LoadAllBinsFailure = createAction('[Bins] Load All Bins Failure', props<{ error: Error }>());

export const CreateBin = createAction('[Bins] Create Bin', props<{ bin: Bins }>());
export const CreateBinSuccess = createAction('[Bins] Create Bin Success', props<{ bin: Bins }>());
export const CreateBinFailure = createAction('[Bins] Create Bin Failure', props<{ error: Error }>());
