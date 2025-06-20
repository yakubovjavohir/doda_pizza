import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ID } from "src/common/types";
import { FactsEntity } from "./entities/fact.entity";
import { IFactRepository } from "./interface/fact.repository";

export class FactRepository implements IFactRepository {
    constructor(
        @InjectRepository(FactsEntity)
        private readonly fact: Repository<FactsEntity>,
    ){}
    async findOne(id: ID): Promise<FactsEntity | null> {
        return await this.fact.findOne({
            where:{id}
        })
    }
    async create(dto: FactsEntity): Promise<FactsEntity> {
        const data = this.fact.create(dto);
        const result = await this.fact.save(data);
        return result;
    }
    async findAll(): Promise<FactsEntity[]> {
        const data = await this.fact.find({
            relations:['t_t']
        });
        return data;
    }
}