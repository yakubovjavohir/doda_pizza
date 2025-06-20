import { ID } from "src/common/types";
import { BreakfastEntity } from "../entities/breakfast.entity";

export interface IBreakfastRepository {
    create(dto:BreakfastEntity):Promise<BreakfastEntity>
    findAll():Promise<Array<BreakfastEntity>>
    findOne(id:ID):Promise<BreakfastEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<BreakfastEntity | null>
}