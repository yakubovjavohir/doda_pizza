import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IOrderService {
    Create(dto:CreateOrder):Observable<ResData>
    FindAll(dto:Fail):Observable<ResDataList>
}

export interface Fail {}



export interface Item {
    productid:ID
    type:string
    quantity?:number | null
    price:number 
    variants?:ID[]
    toppings?:ID[]
    tt:ID[]
}

export interface CreateOrder {
    user:ID
    totalprice:number
    address:string
    status:string
    items:Item[]
}


export interface Data {
    id:ID
    user:ID
    totalprice:number
    address:string
    status:string
    items:Item[]
    createAt:string
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