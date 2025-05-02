import { Observable } from "rxjs";

export interface IToppingService {
    Create(dto:CreateTopping):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
}

export interface IVoid {}


export interface Data {
    id:number
    name:string
    prices:[]
    imageUrl:string
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

export interface CreateTopping {
    name: string;
    prices: Array<{ sm: string, price: string }>;
    imageUrl: string;
}
