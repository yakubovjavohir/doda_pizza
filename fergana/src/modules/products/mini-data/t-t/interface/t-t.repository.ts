import { ID } from "src/common/types";
import { TTEntity } from "../entities/t-t.entity";

export interface ITTRepository {
    create(dto:TTEntity): Promise<TTEntity>;
    findAll(): Promise<TTEntity[]>;
    findOne(id:ID): Promise<TTEntity | null>
}