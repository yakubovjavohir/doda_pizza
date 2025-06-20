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