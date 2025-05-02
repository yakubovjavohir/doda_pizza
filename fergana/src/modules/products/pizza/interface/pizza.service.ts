import { ResData } from "src/lib/resdata";
import { PizzaEntity } from "../entities/pizza.entity";
import { ID } from "src/common/types";

export interface IPizzaService {
    create(dto:PizzaEntity):Promise<ResData<PizzaEntity>>
    findAll():Promise<ResData<PizzaEntity[]>>
    findOne(id:ID):Promise<ResData<PizzaEntity>>
    delete(id:ID):Promise<ResData<null>>
}