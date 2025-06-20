import { ResData } from "src/lib/resdata";
import { VolumesEntity } from "../entities/volume.entity";
import { ID } from "src/common/types";

export interface IVolumesService {
    create(dto:VolumesEntity):Promise<ResData<VolumesEntity>>
    findAll():Promise<ResData<VolumesEntity[]>>
    findOne(id:ID):Promise<ResData<VolumesEntity>>
}