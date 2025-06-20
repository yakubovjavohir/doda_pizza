import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IDessertService {
    Create(dto:CreateDessert):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindById(id:ById):Observable<ResData>
    Delete(id:ById):Observable<ResData>
}
export interface IVoid {}
export interface ById {
    id:ID
}
export interface Volume {
    id:ID
    size:string
    weight:number
    imageUrl:string
    price:number
    product:ID
    type:string
    createAt:string
}

export interface DessertData {
    volume: any;
    meta: any;
    data: any;
    imageUrl: any;
    pcs: any;
    id:ID
    name:string
    description:string
    price:number | null
    url:string
    fixedprice:number | null
    disavailabletoppings:string[]
    vegetarian:boolean
    variants:Volume[]
    createAt:string
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:DessertData
}

export interface ResDataList {
    meta:Meta,
    data:DessertData[]
}

export interface CreateDessert {
    name: string;
    description?: string;
    price?:number
    imageUrl:string
    fixedprice?:number
    disavailabletoppings?:string[]
    vegetarian?:boolean
}
