import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface ISaucesService {
    Create(dto:CreateSauces):Observable<ResData>
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

export interface SaucesData {
    meta: any;
    data: any;
    imageUrl: any;
    id:ID
    name:string
    description:string
    price:number | null
    url:string
    fixedprice:number | null
    variants:Volume[]
    location:"fergana" | "tashkent"
    createAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:SaucesData
}

export interface ResDataList {
    meta:Meta,
    data:SaucesData[]
}

export interface CreateSauces {
    name: string;
    description?: string;
    price?:number
    imageUrl:string
    fixedprice?:number
}
