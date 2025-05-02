import { ResData } from "src/lib/resdata";
import { ToppingEntity } from "../entities/topping.entity";

export interface IToppingService {
    create(dto:ToppingEntity):Promise<ResData<ToppingEntity>>
    findAll():Promise<ResData<ToppingEntity[]>>
}