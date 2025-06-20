import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IFactService {
    Create(dto:CreateFact):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
}
export interface IVoid {}

export interface Data {
    id:ID
    calories:number
    protein:number
    fat:number
    carbohydrate:number
    tt:ID
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

export interface CreateFact {
    calories:number
    protein:number
    fat:number
    carbohydrate:number
    tt:ID
}
