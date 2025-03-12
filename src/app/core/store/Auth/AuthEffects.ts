import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "./AuthService";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";
import { LoadToken, LoadTokenFailure, LoadTokenSuccess, Login, LoginFailure, LoginSuccess } from "./AuthActions";
import Swal from "sweetalert2";


@Injectable({
    providedIn:'root'
})
export class AuthEffects {
    constructor(private authService:AuthService , private store:Store , private action$:Actions){

    }
    
    
    $login = createEffect(
        () => this.action$.pipe(
          ofType(Login),
          switchMap(action =>
            this.authService.login(action.email, action.password).pipe(
              map(loginResponse => LoginSuccess({ token: loginResponse })),
              catchError((err) => of(LoginFailure({ error: err.error })))
            )
          )
        )
      );

    $loginsuccess = createEffect(
        () => this.action$.pipe(
            ofType(LoginSuccess),
            tap(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                    timer: 2000,
                    showConfirmButton: false
                });
            })
        ),
        {dispatch:false}
    )

    $saveToken = createEffect(
        () => this.action$.pipe(
          ofType(LoginSuccess),
          tap(action => {
            localStorage.setItem('Token', JSON.stringify({
              token: action.token.token,
              refreshToken: action.token.refreshToken
            }));
          })
        ),
        { dispatch: false }
      );




}