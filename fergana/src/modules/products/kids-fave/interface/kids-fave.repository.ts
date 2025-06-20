import { ID } from "src/common/types";
import { KidsFaveEntity } from "../entities/kids-fave.entity";

export interface IKidsFaveRepository {
    create(kidsFave: Partial<KidsFaveEntity>): Promise<KidsFaveEntity>;
    findAll(): Promise<Array<KidsFaveEntity>>;
    findOne(id: ID): Promise<KidsFaveEntity | null>;
    delete(id: ID): Promise<void>;
}