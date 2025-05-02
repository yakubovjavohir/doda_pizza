import { Inject, Injectable } from '@nestjs/common';
import { IToppingService } from './interface/toppings.service';
import { ResData } from 'src/lib/resdata';
import { ToppingEntity } from './entities/topping.entity';
import { ToppingRepository } from './toppings.repository';
import { reduce } from 'rxjs';

@Injectable()
export class ToppingsService implements IToppingService{
  @Inject("IToppingRepository")
  private readonly toppingRepository:ToppingRepository
  
  async create(dto: ToppingEntity): Promise<ResData<ToppingEntity>> {
    const data = await this.toppingRepository.create(dto)
    const resdata = new ResData<ToppingEntity>(201, "created toppings", data)
    return resdata
  }
  async findAll(): Promise<ResData<ToppingEntity[]>> {
    const data = await this.toppingRepository.findAll()
    const resdata = new ResData<ToppingEntity[]>(200, "full data", data)
    return resdata
  }
  
}
