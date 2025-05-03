import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IPcRepository } from "./interface/pc.repository";
import { PcEntity } from "./entities/pc.entity";

export class PcRepository implements IPcRepository {
    constructor(
        @InjectRepository(PcEntity)
        private readonly ssbRepository: Repository<PcEntity>,
    ){}
    async create(dto: PcEntity): Promise<PcEntity> {
        const data = this.ssbRepository.create(dto);
        const result = await this.ssbRepository.save(data);
        return result;
    }
    async findAll(): Promise<PcEntity[]> {
        const data = await this.ssbRepository.find();
        return data;
    }
}