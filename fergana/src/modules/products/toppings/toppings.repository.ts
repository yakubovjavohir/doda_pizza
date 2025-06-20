import { InjectRepository } from "@nestjs/typeorm";
import { ToppingEntity } from "./entities/topping.entity";
import { IToppingRepository } from "./interface/toppings.repository";
import { Repository } from "typeorm";
import { ID } from "src/common/types";

export class ToppingRepository implements IToppingRepository {
    @InjectRepository(ToppingEntity)
    private readonly topping:Repository<ToppingEntity>
    async findOne(id: ID): Promise<ToppingEntity | null> {
        return await this.topping.findOne({
            where:{id},
            relations:['prices']
        })
    }
    async create(dto: ToppingEntity): Promise<ToppingEntity> {
        const data = await this.topping.create({...dto})
        return await this.topping.save(data)
    }
    async findAll(): Promise<Array<ToppingEntity>> {
        const data = await this.topping.find({
            relations:['prices']
        })
        return data
    }
    
}