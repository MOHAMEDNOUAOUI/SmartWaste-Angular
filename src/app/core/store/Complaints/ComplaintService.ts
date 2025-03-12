import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Complaints } from "../../Models/Complaints.modules";
import { env } from "../../../../env";

@Injectable({
    providedIn:'root'
})
export class ComplaintSerivce {
     constructor(private http:HttpClient){}

     loadComplaints() : Observable<Complaints[]> {
        return this.http.get<Complaints[]>(env.url+'/complaint/workerComplaints')
     }
}