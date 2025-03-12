import { TaskStatut, TaskType } from "./enums/Enums"
import { Utilisateur } from "./Utilisateur.modules"

export interface Task {
    id:number
    taskName:string
    taskDescription:string
    priority:number
    due_date:Date
    created_time:Date
    type_task:TaskType
    taskStatus:TaskStatut
    Worker:Utilisateur
}