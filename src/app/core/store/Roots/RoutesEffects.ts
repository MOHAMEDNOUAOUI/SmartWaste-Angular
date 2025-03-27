import { Injectable } from "@angular/core";
import { RoutesService } from "./RoutesService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CreateRoute, CreateRouteFailed, CreateRouteSuccess, LoadRoutes, LoadUserRoutes, LoadUserRoutesFailed, LoadUserRoutesSuccefully } from "./RoutesActions";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { routesDate } from "./RootesSelector";

@Injectable({
    providedIn:'root'
})
export class RoutesEffect {
    constructor(private RouteService:RoutesService , private actions$:Actions , private store:Store){}

    $UserRoutes = createEffect(
        () => this.actions$.pipe(
            ofType(LoadUserRoutes),
            switchMap(() => this.RouteService.loadUserRoutes().pipe(
                map((routes) => LoadUserRoutesSuccefully({routes:routes})),
                catchError((error) => of(LoadUserRoutesFailed({error:error})))
            ))
        )
    )

    $Routes = createEffect(
        () => this.actions$.pipe(
            ofType(LoadRoutes),
            switchMap(() => this.RouteService.loadRoutes().pipe(
                map((response) => LoadUserRoutesSuccefully({routes:response.content})),
                catchError((error) => of(LoadUserRoutesFailed({error:error})))
            ))
        )
    )

    createRoute$ = createEffect(
        () => this.actions$.pipe(
            ofType(CreateRoute),
            withLatestFrom(this.store.select(routesDate)),
            switchMap(([action,ListRoutes]) => this.RouteService.createRoute(action.route).pipe(
                map((route) => {
                    console.log(route);
                    const updateRoutes = [...(ListRoutes || []) , route];
                    return CreateRouteSuccess({routes:updateRoutes});
                }),
                catchError((error) => of(CreateRouteFailed({error})))
            ))
        )
    );

    
}