import { ResData } from "src/lib/resdata";
import { SnackEntity } from "../entities/snack.entity";

export interface ISnacksService {
    create(dto: SnackEntity): Promise<ResData<SnackEntity>>;
    findAll(): Promise<ResData<SnackEntity[]>>;
}