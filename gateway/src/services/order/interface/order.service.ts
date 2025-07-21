import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IOrderService {
    Create(dto:CreateOrder):Observable<ResData>
    FindAll(dto:Fail):Observable<ResDataList>
}

export interface Fail {}


export interface Volume {
        id: string;
        type?: "thin" | "traditional" | string;
        size?: string;
        weight?: number;
        price?: number;
}


export interface Topping {
        id: string;
        name: string;
        toppingPrices: {
          id:string,
          sm:string,
          price:number,
        },
        imageUrl:string
}

export interface DisableToppings {
    id: string;
    name: string;
}


export interface Item {
    type: string;
    id: string;
    name: string;
    imageUrl: string;
    quantity: number;
    productTotalPrice: number;
    variant?:Volume | null
    toppings?:Topping[] | null
    disableToppings:DisableToppings[] | null
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