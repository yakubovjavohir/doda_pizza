import { ID } from "src/common/types";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ISaucesRepository } from "./interface/sauces.repository";
import { SaucesEntity } from "./entities/sauce.entity";


export class SaucesRepository implements ISaucesRepository {
    @InjectRepository(SaucesEntity)
    private readonly sauces:Repository<SaucesEntity>
    async nameExsit(name: string): Promise<SaucesEntity | null> {
        
        const data = await this.sauces.findOne({
            where:{
                name
            }
        })
        return data
    }
    async create(dto: SaucesEntity): Promise<SaucesEntity> {
        const data = await this.sauces.create({...dto})
        return await this.sauces.save(data)
    }
    async findAll(): Promise<Array<SaucesEntity>> {
        const data = await this.sauces.find({
            relations:['volume']
        })
        return data
    }
    async findOne(id: ID): Promise<SaucesEntity | null> {
        const data = await this.sauces.findOne({
            where:{
                id
            },
            relations:['volume']
        })
        return data
    }
    async delete(id: ID): Promise<void> {
        await this.sauces.delete(id)
    }
    
}