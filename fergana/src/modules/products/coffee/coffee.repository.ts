import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICoffeeRepository } from "./interface/coffee.repository";
import { CoffeeEntity } from "./entities/coffee.entity";


export class CoffeeRepository implements ICoffeeRepository {
    @InjectRepository(CoffeeEntity)
    private readonly coffee:Repository<CoffeeEntity>
    async nameExsit(name: string): Promise<CoffeeEntity | null> {
        
        const data = await this.coffee.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: CoffeeEntity): Promise<CoffeeEntity> {
        const data = await this.coffee.create({...dto})
        return await this.coffee.save(data)
    }
    async findAll(): Promise<Array<CoffeeEntity>> {
        const data = await this.coffee.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<CoffeeEntity | null> {
        const data = await this.coffee.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.coffee.delete(id)
    }
    
}