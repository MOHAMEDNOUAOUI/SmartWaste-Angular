import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "../../../../env";
import { Roots } from "../../Models/Roots.modules";

@Injectable({
    providedIn:"root"
})
export class RoutesService {
    constructor(private http:HttpClient){}

    loadUserRoutes() : Observable<Roots[]> {
        return this.http.get<Roots[]>(env.url+'/roots/workerRoutes');
    }

    
}