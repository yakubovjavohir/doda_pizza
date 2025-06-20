import { Inject, Injectable } from '@nestjs/common';
import { BreakfastRepository } from './breakfast.repository';
import { BreakfastEntity } from './entities/breakfast.entity';
import { ResData } from 'src/lib/resdata';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';
import { ID } from 'src/common/types';
import { IBreakfastService } from './interface/breakfast.service';

@Injectable()
export class BreakfastService implements IBreakfastService{
  @Inject("IBreakfastRepository")
  private readonly breakfastRepository:BreakfastRepository
  async create(dto: BreakfastEntity): Promise<ResData<BreakfastEntity>> {
    const nameExsit = await this.breakfastRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.breakfastRepository.create(dto)
    const resdata = new ResData<BreakfastEntity>(201, "created breakfast", data)
    return resdata
  }
  async findAll(): Promise<ResData<BreakfastEntity[]>> {
    const data = await this.breakfastRepository.findAll()
    const resdata = new ResData<BreakfastEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<BreakfastEntity>> {
    const data = await this.breakfastRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<BreakfastEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.breakfastRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted breakfast", null)
    return resdata
  }

}
