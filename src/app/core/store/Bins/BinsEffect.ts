import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BinsService } from "./BinsService";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LoadAllBins, LoadAllBinsFailure, LoadAllBinsSuccess } from "./BinsActions";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class BinsEffect {
    constructor(private actions$:Actions , private binsService:BinsService , private store:Store){}

    $loadAllBins = createEffect(
        () => this.actions$.pipe(
            ofType(LoadAllBins),
            switchMap(() => this.binsService.loadAllBins().pipe(
                map((response) => {
                    return LoadAllBinsSuccess({ bins: response.content });
                }),
                catchError((error) => of(LoadAllBinsFailure({error:error})))
            ))
        )
    )

    
}