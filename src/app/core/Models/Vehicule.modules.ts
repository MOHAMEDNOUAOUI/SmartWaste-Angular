import { Roots } from "./Roots.modules"
import { Utilisateur } from "./Utilisateur.modules"

export interface Vehicule {
    id:number
    vehicule_number:string
    capacity:string
    location_longitude:number
    location_latitude:number
    assignedWorker:Utilisateur
    roots:Roots[]
}

export interface VehiculeDTO {
    id:number
    vehicule_number:string
    capacity:string
    location_longitude:number
    location_latitude:number
    assignedWorker:Utilisateur
}