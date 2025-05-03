import { ResData } from "src/lib/resdata";
import { PcEntity } from "../entities/pc.entity";

export interface IPcService {
    create(dto:PcEntity):Promise<ResData<PcEntity>>
    findAll():Promise<ResData<PcEntity[]>>
}