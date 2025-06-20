import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ID } from "src/common/types";
import { IVolumeRepository } from "./interface/volume.repository";
import { VolumesEntity } from "./entities/volume.entity";

export class VolumesRepository implements IVolumeRepository {
    constructor(
        @InjectRepository(VolumesEntity)
        private readonly volume: Repository<VolumesEntity>,
    ){}
    async findOne(id: ID): Promise<VolumesEntity | null> {
        return await this.volume.findOne({
            where:{id}
        })
    }
    async create(dto: VolumesEntity): Promise<VolumesEntity> {
        const data = this.volume.create(dto);
        const result = await this.volume.save(data);
        return result;
    }
    async findAll(): Promise<VolumesEntity[]> {
        const data = await this.volume.find();
        return data;
    }
}