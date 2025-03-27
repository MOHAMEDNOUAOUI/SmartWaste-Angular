import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { VehiculeService } from "./VehiculeService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CreateVehicule, CreateVehiculeFailed, CreateVehiculeSuccess, LoadAllVehicules, LoadAllVehiculesFailed, LoadAllVehiculesSuccess} from "./VehiculeActions";
import { catchError, map, of, switchMap, take, tap, withLatestFrom } from "rxjs";
import { VehicluesSelector } from "./VehiculeSelector";

@Injectable({
    providedIn:'root'
})
export class VehiculesEffect {
    constructor(private store:Store , private VehiculeService:VehiculeService , private action$:Actions){}

    AllVehicules$ = createEffect(
        () => this.action$.pipe(
            ofType(LoadAllVehicules),
            take(1),
            switchMap(() => this.VehiculeService.getAll().pipe(
                map((response) => LoadAllVehiculesSuccess({vehicules:response.content})),
                catchError((error) => of(LoadAllVehiculesFailed({error:error})))
            ))
        )
    );


    CreateVehicule$ = createEffect(
        () => this.action$.pipe(
            ofType(CreateVehicule),
            withLatestFrom(this.store.select(VehicluesSelector)),
            switchMap(([action , listVehicules]) => this.VehiculeService.createVehicule(action.vehicule).pipe(
                map((response) => {
                    const updateVehicule = [...(listVehicules || []) , response];
                    return CreateVehiculeSuccess({vehicules:updateVehicule});
                }),
                catchError((error) => of(CreateVehiculeFailed({error:error})))
            )
        )
        )
    )

}