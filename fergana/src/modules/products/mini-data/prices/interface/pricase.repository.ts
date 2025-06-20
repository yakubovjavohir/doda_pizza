import { ID } from "src/common/types";
import { PricesEntity } from "../entities/price.entity";

export interface IPricaseRepository {
    create(dto:PricesEntity): Promise<PricesEntity>;
    findAll(): Promise<PricesEntity[]>;
    findOne(id:ID):Promise<PricesEntity | null>
}