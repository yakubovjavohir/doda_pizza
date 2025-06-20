import { ID } from "src/common/types";
import { VolumesEntity } from "../entities/volume.entity";

export interface IVolumeRepository {
    create(dto:VolumesEntity): Promise<VolumesEntity>;
    findAll(): Promise<VolumesEntity[]>;
    findOne(id:ID): Promise<VolumesEntity | null>
}