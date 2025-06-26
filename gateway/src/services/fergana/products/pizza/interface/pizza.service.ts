import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";
import { TTData } from "../../mini-data/t-t/interface/t-t.service";

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

export interface PizzaData {
    id:ID
    name:string
    description:string
    price:number | null
    url:string
    imageUrl:string
    fixedprice:number | null
    disavailabletoppings:string[]
    vegetarian:boolean
    pepper:boolean
    variants:TTData[]
    topping:Topping[]       
    createAt:string
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:PizzaData
}


export interface ResDataList {
    meta:Meta,
    data:PizzaData[]
}

export interface Prices {
    size: string,
    prices: number,
    createAt: string,
    updateAt: string
}


export interface Topping {
    id?:ID
    name:string
    prices:Prices[]
    type:string
    imageUrl:string
    createAt:string
    updateAt:string
}

export interface CreatePizza {
    name: string;
    description?: string;
    price?:number | null;   
    imageUrl:string;
    fixedprice?:number | null;
    disavailabletoppings?:string[];
    vegetarian?:boolean;
    pepper?:boolean,
    topping:ID[]
}

export interface Delete {
    meta :Meta,
    data :null
}