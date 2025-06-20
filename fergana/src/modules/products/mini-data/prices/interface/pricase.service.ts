import { ResData } from "src/lib/resdata";
import { PricesEntity } from "../entities/price.entity";
import { ID } from "src/common/types";

export interface IPricesService {
    create(dto:PricesEntity):Promise<ResData<PricesEntity>>
    findAll():Promise<ResData<PricesEntity[]>>
    findOne(id:ID):Promise<ResData<PricesEntity>>
}