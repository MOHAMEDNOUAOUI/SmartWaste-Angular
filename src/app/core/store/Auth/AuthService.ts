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



    loadToken(): string | null {
        const storedToken = localStorage.getItem('Token');
        if (!storedToken) {
            return null;
        }
        return storedToken;
    }
    
    logout() {
        const tokenStorage = localStorage.getItem('Token');
        localStorage.removeItem('Token');
    }

      

    
    
}