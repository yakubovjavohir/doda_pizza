import { Observable } from "rxjs";

export interface IProfileService {
    Create(phone:IPhone):Observable<ResData>
    UpdateName(UpdateNameRequest:UpdateTypeName):Observable<ResData> 
    UpdateBirthday(UpdateBirthdayRequest:UpdateTypeBirthday):Observable<ResData>
    UpdateEmail(UpdateEmailRequest:UpdateTypeEmail):Observable<ResData>
    Logaout(phone:IPhone):Observable<Not>
}



export interface IPhone{
    phone:string
}

export interface Data {
    id:number,
    name:string,
    phone:string,
    birthday:string,
    email:string,
    createAt:string,
    updateAt:string
}
export interface Meta {
    statusCode:number, 
    message:string
}
export interface ResData {
    meta:Meta,
    data:Data
}
export interface UpdateTypeName {
    phone:string,
    name:string
}
export interface UpdateTypeBirthday {
    phone:string,
    birthday:string
}
export interface UpdateTypeEmail {
    phone:string,
    email:string
}

export interface Not {}