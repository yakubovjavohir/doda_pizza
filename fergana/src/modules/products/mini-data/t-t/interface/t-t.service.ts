import { ResData } from "src/lib/resdata";
import { TTEntity } from "../entities/t-t.entity";
import { ID } from "src/common/types";

export interface ITTService {
    create(dto:TTEntity):Promise<ResData<TTEntity>>
    findAll():Promise<ResData<TTEntity[]>>
}