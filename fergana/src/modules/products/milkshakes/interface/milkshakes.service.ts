import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { MilkshakesEntity } from "../entities/milkshake.entity";

export interface IMilkshakesService {
    create(dto:MilkshakesEntity):Promise<ResData<MilkshakesEntity>>
    findAll():Promise<ResData<MilkshakesEntity[]>>
    findOne(id:ID):Promise<ResData<MilkshakesEntity>>
    delete(id:ID):Promise<ResData<null>>
}