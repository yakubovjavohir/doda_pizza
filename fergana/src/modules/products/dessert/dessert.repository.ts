import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDessertRepository } from "./interface/dessert.repository";
import { DessertEntity } from "./entities/dessert.entity";

export class DessertRepository implements IDessertRepository {
    @InjectRepository(DessertEntity)
    private readonly dessert:Repository<DessertEntity>
    async nameExsit(name: string): Promise<DessertEntity | null> {
        
        const data = await this.dessert.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: DessertEntity): Promise<DessertEntity> {
        const data = await this.dessert.create({...dto})
        return await this.dessert.save(data)
    }
    async findAll(): Promise<Array<DessertEntity>> {
        const data = await this.dessert.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<DessertEntity | null> {
        const data = await this.dessert.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.dessert.delete(id)
    }
    
}