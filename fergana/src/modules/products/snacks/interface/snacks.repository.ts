import { ID } from "src/common/types";
import { SnackEntity } from "../entities/snack.entity";

export interface ISnacksRepository {
    create(dto:SnackEntity):Promise<SnackEntity>;
    findAll():Promise<SnackEntity[]>;
    nameExist(name:string):Promise<SnackEntity | null>;
    findOne(id:ID):Promise<SnackEntity | null>
}