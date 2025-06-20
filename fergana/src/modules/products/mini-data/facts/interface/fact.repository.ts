import { ID } from "src/common/types";
import { FactsEntity } from "../entities/fact.entity";

export interface IFactRepository {
    create(dto:FactsEntity): Promise<FactsEntity>;
    findAll(): Promise<FactsEntity[]>;
    findOne(id:ID):Promise<FactsEntity | null>
}