import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "../../../../env";
import { Roots, RootsCreateDTO } from "../../Models/Roots.modules";
import { Pagination } from "../Utilisateur/UserReducer";

@Injectable({
    providedIn:"root"
})
export class RoutesService {
    constructor(private http:HttpClient){}

    loadUserRoutes() : Observable<Roots[]> {
        return this.http.get<Roots[]>(env.url+'/roots/workerRoutes');
    }

    loadRoutes() : Observable<{content:Roots[],pageable:Pagination}>{
        return this.http.get<{content:Roots[] , pageable:Pagination}>(env.url+'/roots');
    }

    createRoute(root:RootsCreateDTO) : Observable<Roots> {
        return this.http.post<Roots>(env.url+'/roots' , root);
    }

    
}