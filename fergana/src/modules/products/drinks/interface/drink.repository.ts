import { ID } from "src/common/types";
import { DrinkEntity } from "../entities/drink.entity";

export interface IDrinkRepository {
    create(dto:DrinkEntity):Promise<DrinkEntity>
    findAll():Promise<Array<DrinkEntity>>
    findOne(id:ID):Promise<DrinkEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<DrinkEntity | null>
}