import { ID } from "src/common/types";
import { KidsFaveEntity } from "../entities/kids-fave.entity";
import { ResData } from "src/lib/resdata";

export interface IKidsFaveService {
    create(dto: KidsFaveEntity): Promise<ResData<KidsFaveEntity>>;
    findAll(): Promise<ResData<Array<KidsFaveEntity>>>;
    findOne(id: ID): Promise<ResData<KidsFaveEntity>>;
    delete(id: ID): Promise<ResData<void>>;
}