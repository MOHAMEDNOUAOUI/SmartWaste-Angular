import { Bins, BinsCreate } from "./Bins.modules"
import { VehiculeDTO } from "./Vehicule.modules"

export interface Roots {
    id:number
    start_time:Date
    end_time:Date
    distance:number
    bins:Bins[]
    vehicule:VehiculeDTO
}
export interface RootsCreateDTO {
    start_time:Date
    end_time:Date
    distance:number
    bins:BinsCreate[]
    vehiculeId:number
}
