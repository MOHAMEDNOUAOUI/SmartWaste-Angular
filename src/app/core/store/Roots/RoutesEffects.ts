import { Injectable } from "@angular/core";
import { RoutesService } from "./RoutesService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoadUserRoutes, LoadUserRoutesFailed, LoadUserRoutesSuccefully } from "./RoutesActions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class RoutesEffect {
    constructor(private RouteService:RoutesService , private actions$:Actions){}

    $UserRoutes = createEffect(
        () => this.actions$.pipe(
            ofType(LoadUserRoutes),
            switchMap(() => this.RouteService.loadUserRoutes().pipe(
                map((routes) => LoadUserRoutesSuccefully({routes:routes})),
                catchError((error) => of(LoadUserRoutesFailed({error:error})))
            ))
        )
    )

    
}