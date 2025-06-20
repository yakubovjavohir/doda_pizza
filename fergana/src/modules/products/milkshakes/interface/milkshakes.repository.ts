import { ID } from "src/common/types";
import { MilkshakesEntity } from "../entities/milkshake.entity";

export interface IMilkshakesRepository {
    create(dto:MilkshakesEntity):Promise<MilkshakesEntity>
    findAll():Promise<Array<MilkshakesEntity>>
    findOne(id:ID):Promise<MilkshakesEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<MilkshakesEntity | null>
}