import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { DrinkEntity } from "../entities/drink.entity";

export interface IDrinkService {
    create(dto:DrinkEntity):Promise<ResData<DrinkEntity>>
    findAll():Promise<ResData<DrinkEntity[]>>
    findOne(id:ID):Promise<ResData<DrinkEntity>>
    delete(id:ID):Promise<ResData<null>>
}