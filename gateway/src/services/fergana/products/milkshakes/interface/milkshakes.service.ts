import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IMilkshakesService {
    Create(dto:CreateMilkshakes):Observable<ResData>
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

export interface MilkshakesData {
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
    data:MilkshakesData
}

export interface ResDataList {
    meta:Meta,
    data:MilkshakesData[]
}

export interface CreateMilkshakes {
    name: string;
    description?: string;
    price?:number
    imageUrl:string
    fixedprice?:number
}
