import { ID } from "src/common/types";
import { DessertEntity } from "../entities/dessert.entity";

export interface IDessertRepository {
    create(dto:DessertEntity):Promise<DessertEntity>
    findAll():Promise<Array<DessertEntity>>
    findOne(id:ID):Promise<DessertEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<DessertEntity | null>
}