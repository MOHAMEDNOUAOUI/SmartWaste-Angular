import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicule, VehiculeCreateDTO } from "../../Models/Vehicule.modules";
import { Pagination } from "../Utilisateur/UserReducer";
import { HttpClient } from "@angular/common/http";
import { env } from "../../../../env";
import { FormGroup } from "@angular/forms";


@Injectable({
    providedIn:'root'
})
export class VehiculeService {
    constructor(private http:HttpClient){}

    getAll() : Observable<{content:Vehicule[] , pageable:Pagination}>{
        return this.http.get<{content:Vehicule[] , pageable:Pagination}>(env.url+'/vehicule')
    }

    createVehicule(vehicule:VehiculeCreateDTO) : Observable<Vehicule> {
        console.log("vehicule"+vehicule);
        return this.http.post<Vehicule>(env.url+'/vehicule' , vehicule);
    }

}   