import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IBreakfastService {
    Create(dto: CreateBreakfast): Observable<ResData>
    FindAll(dto: IVoid): Observable<ResDataList>
    FindById(id: ById): Observable<ResData>
    Delete(id: ById): Observable<ResData>
}

export interface IVoid {}

export interface ById {
    id: ID
}

export interface Volume {
    id: ID
    size: string
    weight: number
    imageUrl: string
    price: number
    type: string
    createAt: string
}

export interface BreakfastData {
    volume: any;
    meta: any;
    data: any;
    imageUrl: any;
    id: ID
    name: string
    description: string
    price: number | null
    url: string
    fixedprice: number | null
    disavailabletoppings: string[]
    vegetarian: boolean
    variants: Volume[]
    createAt: string
}

export interface Meta {
    statusCode: number,
    message: string
}

export interface ResData {
    meta: Meta,
    data: BreakfastData
}

export interface ResDataList {
    meta: Meta,
    data: BreakfastData[]
}

export interface CreateBreakfast {
    name: string;
    description?: string;
    price?: number;
    imageUrl: string;
    fixedprice?: number;
    disavailabletoppings?: string[];
    vegetarian?: boolean;
} 