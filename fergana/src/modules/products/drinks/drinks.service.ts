import { Inject, Injectable } from '@nestjs/common';
import { IDrinkService } from './interface/drink.service';
import { DrinkRepository } from './drink.repository';
import { DrinkEntity } from './entities/drink.entity';
import { ResData } from 'src/lib/resdata';
import { ID } from 'src/common/types';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class DrinksService implements IDrinkService{
  @Inject("IDrinkRepository")
  private readonly drinkRepository:DrinkRepository
  async create(dto: DrinkEntity): Promise<ResData<DrinkEntity>> {
    const nameExsit = await this.drinkRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.drinkRepository.create(dto)
    const resdata = new ResData<DrinkEntity>(201, "created drink", data)
    return resdata
  }
  async findAll(): Promise<ResData<DrinkEntity[]>> {
    const data = await this.drinkRepository.findAll()
    const resdata = new ResData<DrinkEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<DrinkEntity>> {
    const data = await this.drinkRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<DrinkEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.drinkRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted drink", null)
    return resdata
  }

}
