import { ResData } from "src/lib/resdata";
import { SnackEntity } from "../entities/snack.entity";
import { ID } from "src/common/types";

export interface ISnacksService {
    create(dto: SnackEntity): Promise<ResData<SnackEntity>>;
    findAll(): Promise<ResData<SnackEntity[]>>;
    findOne(id:ID):Promise<ResData<SnackEntity>>
}