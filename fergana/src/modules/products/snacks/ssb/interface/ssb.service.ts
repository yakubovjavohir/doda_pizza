import { ResData } from "src/lib/resdata";
import { SSBEntity } from "../entities/ssb.entity";

export interface ISSBService {
    create(dto:SSBEntity):Promise<ResData<SSBEntity>>
    findAll():Promise<ResData<SSBEntity[]>>
}