import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface ITTService {
    Create(dto:CreateTT):Observable<ResData>
    FindAll(dto:IVoid):Observable<ResDataList>
    FindOne(id:ById):Observable<ResData>
}
export interface IVoid {}

export interface ById {
    id:ID
}

export interface Fact {
    id:ID
    calories:number
    protein:number
    fat:number
    carbohydrate:number
    tt:ID
    createAt:string
    updateAt:string
}

export interface TTData {
    id:ID
    size:string
    weight:number
    sm:number
    imageUrl:string
    price:number
    pizza:ID
    facts:Fact[]
    createAt:string
    updateAt:string
}

export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:TTData
}

export interface ResDataList {
    meta:Meta,
    data:TTData[]
}

export interface CreateTT {
    size: 'traditional' | 'thin';
    weight: number;
    sm:number
    price: number;
    imageUrl: string;
    pizza:ID
}
