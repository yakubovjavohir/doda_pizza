export interface IMeta  {
    statusCode:number,
    message:string
}

export class ResData<T>{
    push(topping: ResData<import("../modules/products/toppings/entities/topping.entity").ToppingEntity>) {
      throw new Error('Method not implemented.')
    }
    meta:IMeta
    constructor(statusCode:number, message:string, public data:T | null = null){
        this.meta = {
            statusCode,
            message
        }
    }
}