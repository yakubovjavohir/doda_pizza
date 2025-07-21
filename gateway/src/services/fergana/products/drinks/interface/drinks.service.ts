import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IDrinksService {
    Create(dto:CreateDrinks):Observable<ResData>
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

export interface DrinksData {
    meta: any;
    data: any;
    imageUrl: any;
    id:ID
    name:string
    description:string
    price:number | null
    url:string
    fixedprice:number | null
    vegetarian:boolean
    gaz:boolean
    variants:Volume[]
    location:"fergana" | "tashkent"
    createAt:string
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:DrinksData
}

export interface ResDataList {
    meta:Meta,
    data:DrinksData[]
}

export interface CreateDrinks {
    name: string;
    description?: string;
    price?:number
    imageUrl:string
    fixedprice?:number
    vegetarian?:boolean
    gaz?:boolean
}
