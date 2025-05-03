import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface ISSBService {
    Create(dto:CreateSSB):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
}
export interface IVoid {}

export interface Data {
    id:ID
    name:string
    gram:string
    imageUrl:string
    price:string
    snack:ID
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

export interface CreateSSB {
    name: string;
    gram: string;
    price: string;
    imageUrl: string;
    snack: ID;
}
