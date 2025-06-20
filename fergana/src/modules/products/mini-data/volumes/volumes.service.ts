import { Inject, Injectable } from '@nestjs/common';
import { IVolumesService } from './interface/volume.service';
import { ResData } from 'src/lib/resdata';
import { VolumesEntity } from './entities/volume.entity';
import { VolumesRepository } from './volumes.repository';
import { ID } from 'src/common/types';
import { NotFoundProduct } from 'src/lib/allModule.errors';


@Injectable()
export class VolumesService implements IVolumesService{
  constructor(
    @Inject('IVolumesRepository')
    private readonly volumesRepository : VolumesRepository
  ){}
  async findOne(id: ID): Promise<ResData<VolumesEntity>> {
    const data = await this.volumesRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<VolumesEntity>(200, "success", data)
    return resdata
  }
  async create(dto: VolumesEntity): Promise<ResData<VolumesEntity>> {
    console.log('-a-a-a-a-a', dto);
    
    let change_dto: VolumesEntity = dto;
    if(dto.type === 'snack'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        snack:dto.product,
        type: dto.type,
      } as VolumesEntity
    }
    if(dto.type === 'dessert'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        dessert:dto.product,
        type: dto.type,
      } as VolumesEntity
    }
    if(dto.type === 'drink'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        drink: dto.product,
        type: dto.type,
      } as unknown as VolumesEntity
    }
    if(dto.type === 'coffee'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        coffee: dto.product,
        type: dto.type,
      } as unknown as VolumesEntity
    }
    if(dto.type === 'sauces'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        sauces: dto.product,
        type: dto.type,
      } as unknown as VolumesEntity
    }
    if(dto.type === 'milkshakes'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        milkshakes: dto.product,
        type: dto.type,
      } as unknown as VolumesEntity
    }
    if(dto.type === 'breakfast'){
      change_dto = {
        id: dto.id,
        size: dto.size,
        imageUrl: dto.imageUrl,
        weight: dto.weight,
        price: dto.price,
        breakfast: dto.product,
        type: dto.type,
      } as unknown as VolumesEntity
    }
    const data = await this.volumesRepository.create(change_dto)
    const resdata = new ResData<VolumesEntity>(201, "created", data)
    return resdata
  }
  async findAll(): Promise<ResData<VolumesEntity[]>> {
    const data = await this.volumesRepository.findAll()
    const resdata = new ResData<VolumesEntity[]>(200, "success", data)
    return resdata
  }

}
