import { createAction, props } from "@ngrx/store";
import { Roots, RootsCreateDTO } from "../../Models/Roots.modules";

export const LoadUserRoutes = createAction('[Routes] Load User Routes');
export const LoadUserRoutesSuccefully =createAction('[Routes] Load User Routes Success' , props<{routes:Roots[]}>());
export const LoadUserRoutesFailed = createAction('[Routes] Load User Routes Failed' , props<{error:Error}>());

export const LoadSelectedRoutes = createAction('[Routes] Select Route' , props<{route:Roots}>());
export const ResetSelectedRoutes = createAction('[Routes] Reset Selected Route');

export const LoadRoutes = createAction('[Routes] Load Routes');
export const LoadRoutesSuccefully =createAction('[Routes] Load Routes Success' , props<{routes:Roots[]}>());
export const LoadRoutesFailed = createAction('[Routes] Load Routes Failed' , props<{error:Error}>());

export const CreateRoute = createAction(
    '[Route] Create Route',
    props<{route: RootsCreateDTO}>()
);

export const CreateRouteSuccess = createAction(
    '[Route] Create Route Success',
    props<{routes: Roots[]}>()
);

export const CreateRouteFailed = createAction(
    '[Route] Create Route Failed',
    props<{error: Error}>()
);