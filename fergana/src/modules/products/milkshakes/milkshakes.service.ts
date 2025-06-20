import { Inject, Injectable } from '@nestjs/common';
import { IMilkshakesService } from './interface/milkshakes.service';
import { MilkshakesRepository } from './milkshakes.repository';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';
import { MilkshakesEntity } from './entities/milkshake.entity';
import { ResData } from 'src/lib/resdata';
import { ID } from 'src/common/types';

@Injectable()
export class MilkshakesService implements IMilkshakesService{
  @Inject("IMilkshakesRepository")
  private readonly milkshakes:MilkshakesRepository
  async create(dto: MilkshakesEntity): Promise<ResData<MilkshakesEntity>> {
    const nameExsit = await this.milkshakes.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.milkshakes.create(dto)
    const resdata = new ResData<MilkshakesEntity>(201, "created milkshakes", data)
    return resdata
  }
  async findAll(): Promise<ResData<MilkshakesEntity[]>> {
    const data = await this.milkshakes.findAll()
  const resdata = new ResData<MilkshakesEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<MilkshakesEntity>> {
    const data = await this.milkshakes.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<MilkshakesEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.milkshakes.delete(id)
    const resdata = new ResData<null>(200, "deleted milkshakes", null)
    return resdata
  }

}
