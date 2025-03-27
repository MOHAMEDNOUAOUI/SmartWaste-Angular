import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { AuthService } from "./store/Auth/AuthService";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor {
    // constructor(private authService: AuthService, private router: Router) {}

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     console.log("Interceptor triggered");
        
    //     // Load the token
    //     const token = this.authService.loadToken();
    //     console.log("Token from loadToken:", token);

    //     // If there is a token, clone the request and add the Authorization header
    //     if (token) {
    //         const clonedRequest = req.clone({
    //             setHeaders: {
    //                 Authorization: `Bearer ${token.token}`
    //             }
    //         });

    //         return next.handle(clonedRequest).pipe(
    //             catchError((error) => {
    //                 if (error.status === 401) { // Handle token expiration or invalid token
    //                     console.log('Token expired or invalid. Refreshing token...');
    //                     return this.refreshTokenAndRetry(req, next);
    //                 }
    //                 return throwError(error);
    //             })
    //         );
    //     }

    //     // If no token, just pass the request as is
    //     return next.handle(req);
    // }

    // private refreshTokenAndRetry(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const token = this.authService.loadToken();
    //     if (token) {
    //         return this.authService.refreshToken(token.refreshToken).pipe(
    //             switchMap((newTokenData) => {
    //                 localStorage.setItem('Token', JSON.stringify(newTokenData));
    //                 console.log('Token refreshed successfully');

    //                 // Retry the original request with the new token
    //                 const clonedRequest = req.clone({
    //                     setHeaders: {
    //                         Authorization: `Bearer ${newTokenData.token}`
    //                     }
    //                 });
    //                 return next.handle(clonedRequest);
    //             }),
    //             catchError((err) => {
    //                 console.error('Error refreshing token:', err);
    //                 localStorage.removeItem('Token');
    //                 this.router.navigate(['/auth/login']);
    //                 return throwError(err);
    //             })
    //         );
    //     } else {
    //         this.router.navigate(['/auth/login']);
    //         return throwError('No refresh token available');
    //     }
    // }
}
