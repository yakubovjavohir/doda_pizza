import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { CoffeeEntity } from "../entities/coffee.entity";

export interface ICoffeeService {
    create(dto:CoffeeEntity):Promise<ResData<CoffeeEntity>>
    findAll():Promise<ResData<CoffeeEntity[]>>
    findOne(id:ID):Promise<ResData<CoffeeEntity>>
    delete(id:ID):Promise<ResData<null>>
}