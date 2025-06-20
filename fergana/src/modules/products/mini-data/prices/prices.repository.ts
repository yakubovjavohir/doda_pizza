import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IPricaseRepository } from "./interface/pricase.repository";
import { PricesEntity } from "./entities/price.entity";
import { ID } from "src/common/types";

export class PricesRepository implements IPricaseRepository {
    constructor(
        @InjectRepository(PricesEntity)
        private readonly prices: Repository<PricesEntity>,
    ){}
    async findOne(id: ID): Promise<PricesEntity | null> {
        return await this.prices.findOne({
            where:{id}
        })
    }
    async create(dto: PricesEntity): Promise<PricesEntity> {
        const data = this.prices.create(dto);
        const result = await this.prices.save(data);
        return result;
    }
    async findAll(): Promise<PricesEntity[]> {
        const data = await this.prices.find();
        return data;
    }
}