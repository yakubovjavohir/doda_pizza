import { SnackEntity } from "./entities/snack.entity";
import { ISnacksRepository } from "./interface/snacks.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class SnacksRepository implements ISnacksRepository {
    constructor(
        @InjectRepository(SnackEntity)
        private readonly snacksRepository: Repository<SnackEntity>,
    ){}
    async nameExist(name: string): Promise<SnackEntity | null> {
        const data = await this.snacksRepository.findOne({
            where:{name}
        })
        return data
    }
    async create(dto: SnackEntity): Promise<SnackEntity> {
        const data = this.snacksRepository.create(dto);
        const result = await this.snacksRepository.save(data);
        return result;
    }
    async findAll(): Promise<SnackEntity[]> {
        const data = await this.snacksRepository.find({
            relations:['ssb', 'pcs']
        });
        return data;
    }
}