import { Inject, Injectable } from '@nestjs/common';
import { ISaucesService } from './interface/sauces.service';
import { ISaucesRepository } from './interface/sauces.repository';
import { SaucesEntity } from './entities/sauce.entity';
import { ResData } from 'src/lib/resdata';
import { ID } from 'src/common/types';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class SaucesService implements ISaucesService{
  @Inject("ISaucesRepository")
  private readonly saucesRepository:ISaucesRepository
  async create(dto: SaucesEntity): Promise<ResData<SaucesEntity>> {
    const nameExsit = await this.saucesRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.saucesRepository.create(dto)
    const resdata = new ResData<SaucesEntity>(201, "created sauces", data)
    return resdata
  }
  async findAll(): Promise<ResData<SaucesEntity[]>> {
    const data = await this.saucesRepository.findAll()
    const resdata = new ResData<SaucesEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<SaucesEntity>> {
    const data = await this.saucesRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<SaucesEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.saucesRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted sauces", null)
    return resdata
  }

}
