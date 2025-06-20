import { ResData } from "src/lib/resdata";
import { ID } from "src/common/types";
import { SaucesEntity } from "../entities/sauce.entity";

export interface ISaucesService {
    create(dto:SaucesEntity):Promise<ResData<SaucesEntity>>
    findAll():Promise<ResData<SaucesEntity[]>>
    findOne(id:ID):Promise<ResData<SaucesEntity>>
    delete(id:ID):Promise<ResData<null>>
}