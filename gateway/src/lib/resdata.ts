import { ID } from "src/common/TYPES"

export interface IMeta  {
    statusCode:number,
    message:string
};

export class ResData<T>{
    meta:IMeta
    constructor(statusCode:number, message:string, public data:T | null = null){
        this.meta = {
            statusCode,
            message
        }
    }
};



export class ProductNotFound {
    constructor(id:ID, name:string){
        return {
            statusCode:404,
            message:`this ${id} id ${name} not found`
        }
    }
}