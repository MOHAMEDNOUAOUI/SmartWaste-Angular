import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../Auth/AuthService";
import { Store } from "@ngrx/store";
import { LoadAuthenticatedUser, LoadAuthenticatedUserFailure, LoadAuthenticatedUserSuccess } from "./UserActions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { UserService } from "./UserService";

@Injectable({
    providedIn:'root'
})
export class UserEffect{
 constructor(private userService:UserService , private store:Store , private action$:Actions){}

 user$ = createEffect(() =>
    this.action$.pipe(
      ofType(LoadAuthenticatedUser),
      switchMap(() => 
        this.userService.getAuthenticatedUser().pipe(
          map(user => LoadAuthenticatedUserSuccess({ user })),
          catchError(err => of(LoadAuthenticatedUserFailure({ error: err.message })))
        )
      )
    )
  );

 
}