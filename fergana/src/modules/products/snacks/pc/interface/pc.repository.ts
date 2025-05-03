import { PcEntity } from "../entities/pc.entity";

export interface IPcRepository {
    create(dto:PcEntity): Promise<PcEntity>;
    findAll(): Promise<PcEntity[]>;
}