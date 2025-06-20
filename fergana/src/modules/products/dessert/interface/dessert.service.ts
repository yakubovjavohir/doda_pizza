import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { DessertEntity } from "../entities/dessert.entity";

export interface IDessertService {
    create(dto:DessertEntity):Promise<ResData<DessertEntity>>
    findAll():Promise<ResData<DessertEntity[]>>
    findOne(id:ID):Promise<ResData<DessertEntity>>
    delete(id:ID):Promise<ResData<null>>
}