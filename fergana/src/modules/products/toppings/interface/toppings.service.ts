import { ResData } from "src/lib/resdata";
import { ToppingEntity } from "../entities/topping.entity";
import { ID } from "src/common/types";

export interface IToppingService {
    create(dto:ToppingEntity):Promise<ResData<ToppingEntity>>
    findAll():Promise<ResData<ToppingEntity[]>>
    findOne(id:ID):Promise<ResData<ToppingEntity>>
}