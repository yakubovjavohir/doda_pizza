import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IVolumesService {
    Create(dto:CreateVolumes):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindOne(id:ById):Observable<ResData>
}
export interface IVoid {}

export interface ById {
    id:ID
}

export interface VolumesData {
    id:ID
    size:string
    weight:number
    imageUrl:string
    price:number
    product:ID
    type:string
    createAt:string
}

export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:VolumesData
}

export interface ResDataList {
    meta:Meta,
    data:VolumesData[]
}

export interface CreateVolumes {
    size:string
    weight?:number
    imageUrl:string
    price:number
    product:ID
    type:string
}
