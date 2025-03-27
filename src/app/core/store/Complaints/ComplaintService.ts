import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { env } from "../../../../env";
import { Pagination } from "../Utilisateur/UserReducer";
import { Complaints, ComplaintsCreateDTO } from "../../Models/Complaints.modules";

@Injectable({
    providedIn: 'root'
})
export class ComplaintService {
    constructor(private http:HttpClient , private store:Store){}

    loadAllComplaints() : Observable<{content:Complaints[]}> {
        return this.http.get<{content:Complaints[]}>(env.url+'/complaint')
    }

    createComplaint(complaint: ComplaintsCreateDTO) : Observable<Complaints> {
        return this.http.post<Complaints>(env.url+'/complaint', complaint);
    }

    loadComplaints() : Observable<Complaints[]> {
        return this.http.get<Complaints[]>(env.url+'/complaint/workerComplaints')
    }

    updateTask(complaints: Complaints): Observable<Complaints> {
        return this.http.put<Complaints>(env.url+`/complaint/updateStatut/${complaints.status}/${complaints.id}`, null);
    }

    loadAll() : Observable<{content:Complaints[] , pageable:Pagination}>{
        return this.http.get<{content:Complaints[] , pageable:Pagination}>(env.url+'/complaint')
    }

    loadUserComplaints(): Observable<Complaints[]> {
        return this.http.get<Complaints[]>(`${env.url}/complaint/MyComplaints`);
    }
}