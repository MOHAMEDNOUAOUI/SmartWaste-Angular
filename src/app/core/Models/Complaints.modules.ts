import { Bins } from "./Bins.modules"
import { StatusComplaint } from "./enums/Enums"
import { Medias } from "./media.modules"
import { Utilisateur } from "./Utilisateur.modules"

export interface Complaints{
    id:number
    description:string
    priority:number
    comment:string
    created_at:Date
    resolved_at:Date
    client:Utilisateur
    status:StatusComplaint
    mediaList:Medias
    bins:Bins
}