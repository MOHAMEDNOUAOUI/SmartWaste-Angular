import { Complaints } from "./Complaints.modules"
import { Roots } from "./Roots.modules"

export interface Bins {
    id:number
    location:string
    capacity:number
    location_latitude:number
    location_longitude:number
    last_maintenance:Date
    complaintList:Complaints[]
    roots:Roots
}