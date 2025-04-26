import { Observable } from "rxjs";

export interface IBotService {
    Code(code:ICode):Observable<IData>
}



export interface ICode {
    code:number
}

export interface IData {
    access:boolean,
    phone:string
}