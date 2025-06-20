import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ITTRepository } from "./interface/t-t.repository";
import { TTEntity } from "./entities/t-t.entity";
import { ID } from "src/common/types";

export class TTRepository implements ITTRepository {
    constructor(
        @InjectRepository(TTEntity)
        private readonly ttRepository: Repository<TTEntity>,
    ){}
    async findOne(id: ID): Promise<TTEntity | null> {
        return await this.ttRepository.findOne({
            where:{id}
        })
    }
    async create(dto: TTEntity): Promise<TTEntity> {
        const data = this.ttRepository.create(dto);
        const result = await this.ttRepository.save(data);
        return result;
    }
    async findAll(): Promise<TTEntity[]> {
        const data = await this.ttRepository.find({
            relations:['facts']
        });
        return data;
    }
}