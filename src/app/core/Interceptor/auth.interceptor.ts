import { HttpInterceptorFn, HttpErrorResponse, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError, Observable } from 'rxjs';
import { AuthService } from '../store/Auth/AuthService';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const tokenStorage = localStorage.getItem('Token');
  const parsedToken = tokenStorage ? JSON.parse(tokenStorage) : null;

  const clonedRequest = parsedToken?.token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${parsedToken.token}`
        }
      })
    : req;

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        if (!parsedToken?.refreshToken) {
          authService.logout();
          router.navigate(['/auth/login']);
          return throwError(() => new Error('Authentication failed'));
        }

        return authService.refreshToken(parsedToken.refreshToken).pipe(
          switchMap((newTokenData) => {
            // Update localStorage with new tokens
            localStorage.setItem('Token', JSON.stringify({
              token: newTokenData.token,
              refreshToken: newTokenData.refreshToken
            }));
            const retryRequest = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newTokenData.token}`
              }
            });
            return next(retryRequest);
          }),
          catchError((refreshError) => {
            authService.logout();
            router.navigate(['/auth/login']);
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => error);
    })
  );
};