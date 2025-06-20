import { Observable } from "rxjs";

export interface IProfileService {
    Create(email:IEmail):Observable<ResData>
    UpdateName(UpdateNameRequest:UpdateTypeName):Observable<ResData> 
    UpdateBirthday(UpdateBirthdayRequest:UpdateTypeBirthday):Observable<ResData>
    UpdateEmail(UpdateEmailRequest:UpdateTypeEmail):Observable<ResData>
    Logaout(email:IEmail):Observable<Not>
    FindOne(email:IEmail):Observable<ResData>
}



export interface IEmail{
    email:string
}

export interface Data {
    id:number
    name:string
    phone:string
    birthday:string
    email:string
    bonuse:string
    createAt:string
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
    email:string,
    name:string
}
export interface UpdateTypeBirthday {
    email:string,
    birthday:string
}
export interface UpdateTypeEmail {
    email:string
    phone:string,
}

export interface Not {}