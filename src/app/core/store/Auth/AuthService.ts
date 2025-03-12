import { Injectable } from "@angular/core";
import { Utilisateur } from "../../Models/Utilisateur.modules";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { env } from "../../../../env";
import { LoginResponse } from "./AuthReducer";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient , private router:Router){}

    register(user:Utilisateur) : Observable<any> {
        return this.http.post<any>(env.url +"/auth/register" , user);
    }

    login(email:string,password:string) : Observable<LoginResponse>{
        return this.http.post<LoginResponse>(env.url+"/auth/login" , {email,password});
    } 


    // refreshToken(refreshToken: string): Observable<LoginResponse> {
    //     return this.http.post<LoginResponse>('/auth/refresh', { refreshToken }).pipe(
    //       tap(response => {
    //         console.log('Token refreshed successfully');
    //       }),
    //       catchError(error => {
    //         console.error('Token refresh failed', error);
    //         this.logout();
    //         return throwError(error);
    //       })
    //     );
    //   }

    loadToken(): LoginResponse | null {
        const storedToken = localStorage.getItem('Token');
            console.log("hello");
            
        if (!storedToken) {
            return null;
        }
    
        const parsedToken = JSON.parse(storedToken);
    
        const expirationDate = new Date(parsedToken.token.exp * 1000);
        const now = new Date();
        console.log("hello")
        if (now >= expirationDate) {
            this.refreshToken(parsedToken.refreshToken).subscribe({
                next: (newTokenData) => {
                    localStorage.setItem('Token', JSON.stringify(newTokenData));
                    console.log('Token refreshed successfully');
                },
                error: (err) => {
                    console.error('Error refreshing token:', err);
                    localStorage.removeItem('Token');
                    this.router.navigate(['/auth/login']);
                }
            });
    
            return null;
        }
        return { token: parsedToken.token, refreshToken: parsedToken.refreshToken };
    }
    
    logout() {
        // Instead of completely removing the token, 
        // you might want to clear only specific parts
        const tokenStorage = localStorage.getItem('Token');
        if (tokenStorage) {
          const parsedToken = JSON.parse(tokenStorage);
          // Optionally, you can clear the access token but keep refresh token
          localStorage.setItem('Token', JSON.stringify({
            token: null,
            refreshToken: parsedToken.refreshToken
          }));
        } else {
          // Complete logout if no token exists
          localStorage.removeItem('Token');
        }
        
        // Additional logout logic like navigation
        // this.router.navigate(['/login']);
      }

      
  refreshToken(refreshToken: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/auth/refreshtoken', { refreshToken }).pipe(
      tap(response => {
        console.log('Token refreshed successfully');
      }),
      catchError(error => {
        console.error('Token refresh failed', error);
        // Only logout if the refresh token is truly invalid
        if (error.status === 401 || error.status === 403) {
          this.logout();
        }
        return throwError(error);
      })
    );
  }
    
    
}