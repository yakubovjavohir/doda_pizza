import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";
import { Topping } from "../../pizza/interface/pizza.service";

export interface ICoffeeService {
    Create(dto:CreateCoffee):Observable<ResData>
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
    type:string
    createAt:string
}

export interface CoffeeData {
    imageUrl: any;
    id:ID
    name:string
    description:string
    price:number | null
    url:string
    fixedprice:number | null
    variants:Volume[]
    topping:Topping[]
    location:"fergana" | "tasheknt"
    createAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:CoffeeData
}

export interface ResDataList {
    meta:Meta,
    data:CoffeeData[]
}

export interface CreateCoffee {
    name: string;
    description?: string;
    price?:number
    imageUrl:string
    fixedprice?:number
    topping:ID[]
}
