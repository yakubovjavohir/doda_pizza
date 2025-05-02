import { ToppingEntity } from "../entities/topping.entity";

export interface IToppingRepository {
    create(dto:ToppingEntity):Promise<ToppingEntity>
    findAll():Promise<Array<ToppingEntity>>
}