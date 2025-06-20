import { ID } from "src/common/types";
import { CoffeeEntity } from "../entities/coffee.entity";

export interface ICoffeeRepository {
    create(dto:CoffeeEntity):Promise<CoffeeEntity>
    findAll():Promise<Array<CoffeeEntity>>
    findOne(id:ID):Promise<CoffeeEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<CoffeeEntity | null>
}