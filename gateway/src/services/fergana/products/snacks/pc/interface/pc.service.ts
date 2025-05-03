import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IPcService {
    Create(dto:CreatePc):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
}
export interface IVoid {}

export interface Data {
    id:ID
    pc:string
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

export interface CreatePc {
    pc: string;
    price: string;
    imageUrl: string;
    gram: string;
    snack: ID;
}
