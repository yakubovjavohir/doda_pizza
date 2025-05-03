import { InjectRepository } from "@nestjs/typeorm";
import { SSBEntity } from "./entities/ssb.entity";
import { ISSBRepository } from "./interface/ssb.repository";
import { Repository } from "typeorm";

export class SSBRepository implements ISSBRepository {
    constructor(
        @InjectRepository(SSBEntity)
        private readonly ssbRepository: Repository<SSBEntity>,
    ){}
    async create(dto: SSBEntity): Promise<SSBEntity> {
        const data = this.ssbRepository.create(dto);
        const result = await this.ssbRepository.save(data);
        return result;
    }
    async findAll(): Promise<SSBEntity[]> {
        const data = await this.ssbRepository.find();
        return data;
    }
}