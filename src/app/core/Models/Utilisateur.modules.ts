import { ComplaintsDTO } from "./Complaints.modules"
import { Role } from "./enums/Enums"
import { Task } from "./Task.modules"
import { Vehicule } from "./Vehicule.modules"

export interface Utilisateur {
    id:number
    username:string
    password:string
    email:string
    rrole:Role
    created_at:Date
    salaire?: number
    hire_date?: Date,
    contact_info?: string,
    job_title?: string
}

export interface Client extends Utilisateur {
    complaintList:ComplaintsDTO[]
}

export interface Worker extends Utilisateur{
    vehiculeList:Vehicule[]
    taskList:Task[]
}

export interface Admin extends Utilisateur{
    
}