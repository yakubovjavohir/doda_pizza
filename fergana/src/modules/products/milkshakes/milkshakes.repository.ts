import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IMilkshakesRepository } from "./interface/milkshakes.repository";
import { MilkshakesEntity } from "./entities/milkshake.entity";


export class MilkshakesRepository implements IMilkshakesRepository {
    @InjectRepository(MilkshakesEntity)
    private readonly milkshakes:Repository<MilkshakesEntity>
    async nameExsit(name: string): Promise<MilkshakesEntity | null> {
        
        const data = await this.milkshakes.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: MilkshakesEntity): Promise<MilkshakesEntity> {
        const data = await this.milkshakes.create({...dto})
        return await this.milkshakes.save(data)
    }
    async findAll(): Promise<Array<MilkshakesEntity>> {
        const data = await this.milkshakes.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<MilkshakesEntity | null> {
        const data = await this.milkshakes.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.milkshakes.delete(id)
    }
    
}