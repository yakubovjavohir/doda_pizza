import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface ISnackService {
    Create(dto:CreateSnack):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
}
export interface IVoid {}

export interface SSB {
    id:ID
    name:string
    weight:string
    imageUrl:string
    price:string
    createAt:string
    updateAt:string
}

export interface Data {
    id:ID
    name:string
    description:string
    ssb:SSB[]
    createAt:string
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:Data
}

export interface ResDataList {
    meta:Meta,
    data:Data[]
}

export interface CreateSnack {
    name: string;
    description?: string;
}
