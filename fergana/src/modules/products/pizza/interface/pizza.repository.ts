import { ID } from "src/common/types";
import { PizzaEntity } from "../entities/pizza.entity";

export interface IPizzaRepository {
    create(dto:PizzaEntity):Promise<PizzaEntity>
    findAll():Promise<Array<PizzaEntity>>
    findOne(id:ID):Promise<PizzaEntity | null>
    delete(id:ID):Promise<void>
    nameExsit(name:string):Promise<PizzaEntity | null>
}