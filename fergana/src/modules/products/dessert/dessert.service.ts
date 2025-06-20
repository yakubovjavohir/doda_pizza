import { Inject, Injectable } from '@nestjs/common';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resdata';
import { IDessertService } from './interface/dessert.service';
import { DessertRepository } from './dessert.repository';
import { DessertEntity } from './entities/dessert.entity';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class DessertService implements IDessertService{
  @Inject("IDessertRepository")
  private readonly dessertRepository:DessertRepository
  async create(dto: DessertEntity): Promise<ResData<DessertEntity>> {
    const nameExsit = await this.dessertRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.dessertRepository.create(dto)
    const resdata = new ResData<DessertEntity>(201, "created dessert", data)
    return resdata
  }
  async findAll(): Promise<ResData<DessertEntity[]>> {
    const data = await this.dessertRepository.findAll()
    const resdata = new ResData<DessertEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<DessertEntity>> {
    const data = await this.dessertRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<DessertEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.dessertRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted dessert", null)
    return resdata
  }

}
