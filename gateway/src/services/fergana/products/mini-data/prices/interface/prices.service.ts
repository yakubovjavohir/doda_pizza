import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IPricesService {
    Create(dto:CreatePrices):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindOne(id:ById):Observable<ResData>
}
export interface IVoid {}

export interface ById {
    id:ID
}

export interface Data {
    id:ID
    size:string
    price:number
    topping:ID
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

export interface CreatePrices {
    size: string;
    price: number;
    topping:ID;
}
