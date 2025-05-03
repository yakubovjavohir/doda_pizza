import { SSBEntity } from "../entities/ssb.entity";

export interface ISSBRepository {
    create(dto:SSBEntity): Promise<SSBEntity>;
    findAll(): Promise<SSBEntity[]>;
}