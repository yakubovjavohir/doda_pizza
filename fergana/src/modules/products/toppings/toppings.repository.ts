import { InjectRepository } from "@nestjs/typeorm";
import { ToppingEntity } from "./entities/topping.entity";
import { IToppingRepository } from "./interface/toppings.repository";
import { Repository } from "typeorm";

export class ToppingRepository implements IToppingRepository {
    @InjectRepository(ToppingEntity)
    private readonly topping:Repository<ToppingEntity>
    async create(dto: ToppingEntity): Promise<ToppingEntity> {
        const data = await this.topping.create({...dto})
        return await this.topping.save(data)
    }
    async findAll(): Promise<Array<ToppingEntity>> {
        const data = await this.topping.find()
        return data
    }
    
}