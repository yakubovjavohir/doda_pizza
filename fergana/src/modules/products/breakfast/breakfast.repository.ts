import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IBreakfastRepository } from "./interface/breakfast.repository";
import { BreakfastEntity } from "./entities/breakfast.entity";


export class BreakfastRepository implements IBreakfastRepository {
    @InjectRepository(BreakfastEntity)
    private readonly breakfast:Repository<BreakfastEntity>
    async nameExsit(name: string): Promise<BreakfastEntity | null> {
        
        const data = await this.breakfast.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: BreakfastEntity): Promise<BreakfastEntity> {
        const data = await this.breakfast.create({...dto})
        return await this.breakfast.save(data)
    }
    async findAll(): Promise<Array<BreakfastEntity>> {
        const data = await this.breakfast.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<BreakfastEntity | null> {
        const data = await this.breakfast.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.breakfast.delete(id)
    }
    
}