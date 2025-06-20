import { ID } from "src/common/types";
import { SaucesEntity } from "../entities/sauce.entity";

export interface ISaucesRepository {
    create(dto:SaucesEntity):Promise<SaucesEntity>
    findAll():Promise<Array<SaucesEntity>>
    findOne(id:ID):Promise<SaucesEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<SaucesEntity | null>
}