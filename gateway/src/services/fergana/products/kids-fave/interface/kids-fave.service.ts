import { Observable } from "rxjs";
import { ID } from "src/common/TYPES";

export interface IKidsFaveService {
    Create(dto: CreateKidsFave): Observable<ResData>
    FindAll(dto: IVoid): Observable<ResDataList>
    FindById(id: ById): Observable<ResData>
    Delete(id: ById): Observable<ResData>
}

export interface IVoid {}

export interface ById {
    id: ID
}

export interface KidsFaveData {
    id: ID
    type:string,
    spicy: boolean
    kidsFriendly: boolean
    recommendedAge: number
    product:any,
    location:"fergana" | "tashkent"
    createAt: string
}

export interface Meta {
    statusCode: number
    message: string
}

export interface ResData {
    meta: Meta
    data: KidsFaveData
}

export interface ResDataList {
    meta: Meta
    data: KidsFaveData[]
}

export interface CreateKidsFave {
    type:string,
    product:ID
    spicy?: boolean
    kidsFriendly?: boolean
    recommendedAge?: number
} 