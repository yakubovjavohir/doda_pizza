import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { BreakfastEntity } from "../entities/breakfast.entity";

export interface IBreakfastService {
    create(dto:BreakfastEntity):Promise<ResData<BreakfastEntity>>
    findAll():Promise<ResData<BreakfastEntity[]>>
    findOne(id:ID):Promise<ResData<BreakfastEntity>>
    delete(id:ID):Promise<ResData<null>>
}