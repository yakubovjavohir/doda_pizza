import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { FactsEntity } from "../entities/fact.entity";

export interface IFactsService {
    create(dto:FactsEntity):Promise<ResData<FactsEntity>>
    findAll():Promise<ResData<FactsEntity[]>>
    findOne(id:ID):Promise<ResData<FactsEntity>>
}