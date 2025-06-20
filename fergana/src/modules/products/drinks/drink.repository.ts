import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDrinkRepository } from "./interface/drink.repository";
import { DrinkEntity } from "./entities/drink.entity";


export class DrinkRepository implements IDrinkRepository {
    @InjectRepository(DrinkEntity)
    private readonly drink:Repository<DrinkEntity>
    async nameExsit(name: string): Promise<DrinkEntity | null> {
        
        const data = await this.drink.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: DrinkEntity): Promise<DrinkEntity> {
        const data = await this.drink.create({...dto})
        return await this.drink.save(data)
    }
    async findAll(): Promise<Array<DrinkEntity>> {
        const data = await this.drink.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<DrinkEntity | null> {
        const data = await this.drink.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.drink.delete(id)
    }
    
}