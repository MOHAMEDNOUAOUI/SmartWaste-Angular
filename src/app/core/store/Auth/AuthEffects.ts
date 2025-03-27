import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "./AuthService";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, switchMap, take, tap } from "rxjs";
import { ClearError, ClearState, LoadToken, LoadTokenFailure, LoadTokenSuccess, Login, LoginFailure, LoginSuccess, Logout } from "./AuthActions";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { Token } from "./AuthSelector";


@Injectable({
    providedIn:'root'
})
export class AuthEffects {
    constructor(private authService:AuthService ,private router:Router , private store:Store , private action$:Actions){

    }
    
    
    $login = createEffect(
        () => this.action$.pipe(
          ofType(Login),
          switchMap(action =>
            this.authService.login(action.email, action.password).pipe(
              map(response => LoginSuccess({token:response.token})),
              catchError((err) => of(LoginFailure({ error: err.error })))
            )
          )
        )
    );

    $loginsuccess = createEffect(
        () => this.action$.pipe(
            ofType(LoginSuccess),
            tap((action) => {
              console.log(action)
              localStorage.setItem('Token',action.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                    timer: 2000,
                    showConfirmButton: false
                });
                this.store.dispatch(ClearState());
                this.router.navigate(['/'])
            })
        ),
        {dispatch:false}
    )



      $logout= createEffect(
        () => this.action$.pipe(
          ofType(Logout),
          take(1),
          tap(() => {
            this.authService.logout();
            this.router.navigate(['/auth/login'])
          })
        )
      )

}