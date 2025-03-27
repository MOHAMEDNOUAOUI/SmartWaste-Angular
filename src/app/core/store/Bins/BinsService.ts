import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Bins } from "../../Models/Bins.modules";
import { Observable } from "rxjs";
import { env } from "../../../../env";

@Injectable({
    providedIn: 'root'
})
export class BinsService {
    constructor(private http:HttpClient , private store:Store){}

    loadAllBins() : Observable<{content:Bins[]}> {
        return this.http.get<{content:Bins[]}>(env.url+'/bins')
    }

    CreateBin(bin:Bins) : Observable<Bins> {
        return this.http.post<Bins>(env.url+'/bins',bin)
    }
}