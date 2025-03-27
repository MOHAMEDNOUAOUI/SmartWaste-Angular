import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadComplaint, loadComplaintFailure, loadComplaintSuccess, loadEmployeeComplaint, loadEmployeeComplaintFailure, loadEmployeeComplaintSuccess, UpdateComplaintStatus, UpdateComplaintStatusFailure, UpdateComplaintStatusSuccess, UpdateUpdateComplaintList, CreateComplaint, CreateComplaintSuccess, CreateComplaintFailure, LoadAllComplaints, LoadAllComplaintsFailure, LoadAllComplaintsSuccess, LoadUserComplaints, LoadUserComplaintsFailure, LoadUserComplaintsSuccess } from "./ComplaintActions";
import { catchError, filter, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { ComplaintService } from "./ComplaintService";
import { Store } from "@ngrx/store";
import { selectAllComplaints } from "./ComplaintSelector";
import { Complaints } from "../../Models/Complaints.modules";

@Injectable({
    providedIn:'root'
})
export class ComplaintsEffect {
    constructor(private actions$:Actions , private complaintService:ComplaintService , private store:Store){}

    $loadComplaints = createEffect(
        () => this.actions$.pipe(
            ofType(loadEmployeeComplaint),
            switchMap(() => this.complaintService.loadComplaints().pipe(
                map((complaints) => {
                    console.log(complaints);
                    return loadEmployeeComplaintSuccess({complaints:complaints})
                }),
                catchError((error) => of(loadEmployeeComplaintFailure({error})))
            ))
        )
    )

    $updateStatus = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateComplaintStatus),
            switchMap((action) => this.complaintService.updateTask(action.complaint).pipe(
                map((complaint) => UpdateComplaintStatusSuccess({complaint})),
                catchError((error) => of(UpdateComplaintStatusFailure({error})))
            ))
        )
    )

    updateComplaints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UpdateComplaintStatusSuccess),
            withLatestFrom(this.store.select(selectAllComplaints)),
            filter(([_, complaints]) => !!complaints),
            map(([action, complaints]) => {
                const updatedComplaints = (complaints ?? []).map((complaint: Complaints) =>
                    complaint.id === action.complaint.id ? { ...complaint, ...action.complaint } : complaint
                );
                return UpdateUpdateComplaintList({ complaints: updatedComplaints });
            })
        )
    );

    AllComplaints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadComplaint),
            switchMap(() =>
                this.complaintService.loadAll().pipe(
                    tap(response => console.log(response.content)),
                    map((response) =>
                        loadComplaintSuccess({ complaints: response.content, pageable: response.pageable })
                    ),
                    catchError((error) => of(loadComplaintFailure({ error })))
                )
            )
        )
    );
    
    $loadAllComplaints = createEffect(
        () => this.actions$.pipe(
            ofType(LoadAllComplaints),
            switchMap(() => this.complaintService.loadAllComplaints().pipe(
                map((response) => {
                    return LoadAllComplaintsSuccess({ complaints: response.content });
                }),
                catchError((error) => of(LoadAllComplaintsFailure({error:error})))
            ))
        )
    )

    $createComplaint = createEffect(
        () => this.actions$.pipe(
            ofType(CreateComplaint),
            withLatestFrom(this.store.select(selectAllComplaints)),
            switchMap(([action,AllComplaints]) => this.complaintService.createComplaint(action.complaint).pipe(
                map((response) => {
                    const updateCOmplaints = [...AllComplaints,response];
                    return CreateComplaintSuccess({ complaints: updateCOmplaints });
                }),
                catchError((error) => of(CreateComplaintFailure({error})))
            ))
        )
    )

    $loadUserComplaints = createEffect(
        () => this.actions$.pipe(
            ofType(LoadUserComplaints),
            switchMap(() => this.complaintService.loadUserComplaints().pipe(
                map((complaints) => LoadUserComplaintsSuccess({complaints:complaints})),
                catchError((error) => of(LoadUserComplaintsFailure({error:error})))
            ))
        )
    )
}