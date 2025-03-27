import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable} from "rxjs";
import { Client, Utilisateur, Worker } from "../../Models/Utilisateur.modules";
import { env } from "../../../../env";
import { HttpClient} from "@angular/common/http";
import { Pagination } from "./UserReducer";


@Injectable({
    providedIn:'root',
})
export class UserService {
    constructor(private store: Store,private http: HttpClient) {
    }

    getAuthenticatedUser(): Observable<Utilisateur> {
        return this.http.get<Utilisateur>(`${env.url}/auth/me`);
    }


    getAllWorkers() : Observable<{content: Worker[],pagination:Pagination}> {
        return this.http.get<{content:Worker[],pagination:Pagination}>(env.url+'/worker');
    }

    getAllClient() : Observable<{content:Client[],pagination:Pagination}> {
        return this.http.get<{content:Client[],pagination:Pagination}>(env.url+'/client')
    }

    deleteWorker(id: number): Observable<string> {
        return this.http.delete(`${env.url}/worker/${id}`, { responseType: 'text' });
    }
    deleteClient(id: number): Observable<string> {
        return this.http.delete(`${env.url}/client/${id}`, { responseType: 'text' });
    }
    
    Hire(id:number) : Observable<Worker> {
        return this.http.post<Worker>(env.url+'/worker/hire/'+id , null);
    }

}
