import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable} from "rxjs";
import { Utilisateur } from "../../Models/Utilisateur.modules";
import { env } from "../../../../env";
import { HttpClient} from "@angular/common/http";


@Injectable({
    providedIn:'root',
})
export class UserService {
    constructor(private store: Store,private http: HttpClient) {
    }

    getAuthenticatedUser(): Observable<Utilisateur> {
        return this.http.get<Utilisateur>(`${env.url}/auth/me`);
    }
}
