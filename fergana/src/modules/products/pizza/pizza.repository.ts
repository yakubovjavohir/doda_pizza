import { ID } from "src/common/types";
import { PizzaEntity } from "./entities/pizza.entity";
import { IPizzaRepository } from "./interface/pizza.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class PizzaRepository implements IPizzaRepository {
    @InjectRepository(PizzaEntity)
    private readonly pizza:Repository<PizzaEntity>
    async nameExsit(name: string): Promise<PizzaEntity | null> {
        
        const data = await this.pizza.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: PizzaEntity): Promise<PizzaEntity> {
        const data = await this.pizza.create({...dto})
        return await this.pizza.save(data)
    }
    async findAll(): Promise<Array<PizzaEntity>> {
        const data = await this.pizza.find({
            relations:['tt', 'tt.facts']
        })
        return data
    }
    async findOne(id: ID): Promise<PizzaEntity | null> {
        const data = await this.pizza.findOne({
            where:{
                id
            },
            relations:['tt', 'tt.facts']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.pizza.delete(id)
    }
    
}