import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface ISnackService {
    Create(dto:CreateSnack):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindById(id:ById):Observable<ResData>
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

export interface SnackData {
    volume: any;
    id:ID
    imageUrl: string;
    price: number;
    name:string
    description:string
    fixedprice:number
    vegetarian:boolean
    disavailabletoppings:string[]
    pepper:boolean
    variants:Volume[]
    createAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:SnackData
}

export interface ResDataList {
    meta:Meta,
    data:SnackData[]
}

export interface CreateSnack {
    name: string;
    description?: string;
    fixedprice?:number
    vegetarian?:boolean
    disavailabletoppings?:string[]
    pepper?:boolean
    price?:number
    imageUrl?:string
}
