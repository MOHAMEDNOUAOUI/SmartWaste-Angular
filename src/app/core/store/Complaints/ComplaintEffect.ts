import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadEmployeeComplaint, loadEmployeeComplaintFailure, loadEmployeeComplaintSuccess, UpdateComplaintStatus, UpdateComplaintStatusFailure, UpdateComplaintStatusSuccess, UpdateUpdateComplaintList } from "./ComplaintActions";
import { catchError, filter, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { ComplaintSerivce } from "./ComplaintService";
import { Store } from "@ngrx/store";
import { selectAllComplaints } from "./ComplaintSelector";

@Injectable({
    providedIn:'root'
})
export class ComplaintsEffect {
    constructor(private actions$:Actions , private ComplaintService:ComplaintSerivce , private store:Store){}

    $loadComplaints = createEffect(
        () => this.actions$.pipe(
            ofType(loadEmployeeComplaint),
            switchMap(() => this.ComplaintService.loadComplaints().pipe(
                map((complaints) => loadEmployeeComplaintSuccess({Complaints:complaints})),
                catchError((error) => of(loadEmployeeComplaintFailure({error:error})))
            ))
        )
    )


    $updateStatus = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateComplaintStatus),
            switchMap((action) => this.ComplaintService.updateTask(action.complaint).pipe(
                map((complaint) => UpdateComplaintStatusSuccess({complaint:complaint})),
                catchError((error) => of(UpdateComplaintStatusFailure({error:error})))
            ))
        )
    )

     updateTasks$ = createEffect(() =>
            this.actions$.pipe(
                ofType(UpdateComplaintStatusSuccess),
                withLatestFrom(this.store.select(selectAllComplaints)),
                filter(([_, complaints]) => !!complaints),
                map(([action, complaints]) => {
                    const updatedComplaints = (complaints ?? []).map(complaint =>
                        complaint.id === action.complaint.id ? { ...complaint, ...action.complaint } : complaint
                    );
                    return UpdateUpdateComplaintList({ complaints: updatedComplaints });
                })
            )
        );
}