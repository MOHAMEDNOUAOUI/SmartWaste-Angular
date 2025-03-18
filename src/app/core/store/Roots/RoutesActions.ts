import { createAction, props } from "@ngrx/store";
import { Roots } from "../../Models/Roots.modules";

export const LoadUserRoutes = createAction('[Routes] Load User Routes');
export const LoadUserRoutesSuccefully =createAction('[Routes] Load User Routes Success' , props<{routes:Roots[]}>());
export const LoadUserRoutesFailed = createAction('[Routes] Load User Routes Failed' , props<{error:Error}>());

export const LoadSelectedRoutes = createAction('[Routes] Select Route' , props<{route:Roots}>());
export const ResetSelectedRoutes = createAction('[Routes] Reset Selected Route');

