import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IToppingService {
    Create(dto:CreateTopping):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindOne(id:ById):Observable<ResData>
}

export interface ById {
    id:ID
}

export interface IVoid {}

export interface Prices {
    id:ID,
    size:string,
    prices:number,
    createAt:string,
    updateAt:string
}


export interface ToppingData {
    id:ID
    name:string
    type:string
    imageUrl:string
    prices:Prices[]
    createAt:string
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:ToppingData
}

export interface ResDataList {
    meta:Meta,
    data:ToppingData[]
}

export interface CreateTopping {
    name: string;
    imageUrl: string;
    type:string
}
