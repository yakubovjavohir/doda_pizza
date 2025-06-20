import { Inject, Injectable } from '@nestjs/common';
import { ICoffeeService } from './interface/coffee.service';
import { ResData } from 'src/lib/resdata';
import { CoffeeEntity } from './entities/coffee.entity';
import { ID } from 'src/common/types';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';
import { CoffeeRepository } from './coffee.repository';

@Injectable()
export class CoffeeService implements ICoffeeService{
  @Inject("ICoffeeRepository")
  private readonly coffeeRepository:CoffeeRepository
  async create(dto: CoffeeEntity): Promise<ResData<CoffeeEntity>> {
    const nameExsit = await this.coffeeRepository.nameExsit(dto.name)
    if(nameExsit){
      throw new NameExist()
    }
    
    const data = await this.coffeeRepository.create(dto)
    const resdata = new ResData<CoffeeEntity>(201, "created coffee", data)
    return resdata
  }
  async findAll(): Promise<ResData<CoffeeEntity[]>> {
    const data = await this.coffeeRepository.findAll()
    const resdata = new ResData<CoffeeEntity[]>(200, "success", data)
    return resdata
  }
  async findOne(id: ID): Promise<ResData<CoffeeEntity>> {
    const data = await this.coffeeRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<CoffeeEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id)
    await this.coffeeRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted coffee", null)
    return resdata
  }

}
