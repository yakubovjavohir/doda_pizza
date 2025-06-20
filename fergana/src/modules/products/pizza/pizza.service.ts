import { Inject, Injectable } from '@nestjs/common';
import { IPizzaService } from './interface/pizza.service';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resdata';
import { PizzaEntity } from './entities/pizza.entity';
import { PizzaRepository } from './pizza.repository';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class PizzaService implements IPizzaService{
  @Inject("IPizzaRepository")
  private readonly pizzaRepository:PizzaRepository
  async create(dto: PizzaEntity): Promise<ResData<PizzaEntity>> {
    
    const nameExsit = await this.pizzaRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.pizzaRepository.create(dto)
    const resdata = new ResData<PizzaEntity>(201, "created pizza", data)
    return resdata
  }
  async findAll(): Promise<ResData<PizzaEntity[]>> {
    const data = await this.pizzaRepository.findAll()
    const resdata = new ResData<PizzaEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<PizzaEntity>> {
    const data = await this.pizzaRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<PizzaEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.pizzaRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted pizza", null)
    return resdata
  }

}
