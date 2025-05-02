import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IPizzaService {
    Create(dto:CreatePizza):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindOne(dto:ById):Observable<ResData>
    Delete(dto:ById):Observable<Delete>
}

export interface ById {
    id:ID
}

export interface IVoid {}

export interface Data {
    id:ID
    name:string
    description:string
    price:string
    toppings:[]
    imageUrl:[]
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

export interface CreatePizza {
    name: string;
    description: string;
    price:string;   
    imageUrl: Array<{ sm: string, imageUrl: string, type : "Traditional" | "Thin" }>;
}

export interface Delete {
    meta :Meta,
    data :null
}