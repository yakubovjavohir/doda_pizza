import { ID } from "src/common/types"

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

export interface ITT {
    id:ID
    type:string
    weight:number
    sm:number
    imageUrl:string
    price:number
    pizza:ID
    facts:Fact[]
    createAt:string
    updateAt:string
}

export interface Prices {
    id:ID,
    size:string,
    prices:number,
    createAt:string,
    updateAt:string
}


export interface ToppingData {
    id:ID
    name:string
    type:string
    imageUrl:string
    prices:Prices[]
    createAt:string
    updateAt:string
}