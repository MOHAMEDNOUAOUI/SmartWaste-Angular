import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadEmployeeComplaint, loadEmployeeComplaintFailure, loadEmployeeComplaintSuccess } from "./ComplaintActions";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { ComplaintSerivce } from "./ComplaintService";

@Injectable({
    providedIn:'root'
})
export class ComplaintsEffect {
    constructor(private actions$:Actions , private ComplaintService:ComplaintSerivce){}

    $loadComplaints = createEffect(
        () => this.actions$.pipe(
            ofType(loadEmployeeComplaint),
            switchMap(() => this.ComplaintService.loadComplaints().pipe(
                map((complaints) => loadEmployeeComplaintSuccess({Complaints:complaints})),
                catchError((error) => of(loadEmployeeComplaintFailure({error:error})))
            ))
        )
    )

}