import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, Observable, switchMap, take, throwError } from "rxjs";
import { Token } from "../Auth/AuthSelector";
import { env } from "../../../../env";
import { Task } from "../../Models/Task.modules";
import { AuthService } from "../Auth/AuthService";
import { Pagination } from "../Utilisateur/UserReducer";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn:'root'
})
export class TaskService {
    private url = env.url;
    constructor(private http:HttpClient , private authservice:AuthService , private store:Store){
    }

    getUserTasks() : Observable<Task[]>{
        return this.http.get<Task[]>(`${this.url}/task/workerTasks`);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.url}/task/updateStatut/${task.taskStatus}/${task.id}`, null);
    }
    
    getTasks() : Observable<{content:Task[] , pageable:Pagination}> {
        return this.http.get<{content:Task[] , pageable:Pagination}>(`${this.url}/task`);
    }

    createTask(task:FormGroup) : Observable<Task> {
        return this.http.post<Task>(`${this.url}/task` , task);
    }

}