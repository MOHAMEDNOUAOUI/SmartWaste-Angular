import { Bins, BinsDTO } from "./Bins.modules"
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

export interface ComplaintsDTO{
    id:number
    description:string
    priority:number
    comment:string
    created_at:Date
    resolved_at:Date
    status:StatusComplaint
    mediaList:Medias
    bins:Bins
}

export interface ComplaintsCreateDTO {
    description: string;
    priority: number;
    comment: string;
    bin: number;
    client_id: number;
    created_at?: Date;
    status?: StatusComplaint;
    files?: File[];
}
