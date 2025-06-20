import { Inject, Injectable } from '@nestjs/common';
import { PricesRepository } from './prices.repository';
import { PricesEntity } from './entities/price.entity';
import { ResData } from 'src/lib/resdata';
import { IPricesService } from './interface/pricase.service';
import { ID } from 'src/common/types';
import { NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class PricesService implements IPricesService{
  constructor(
    @Inject('IPricesRepository')
    private readonly pricesRepsoitory: PricesRepository,
  ){}
  async findOne(id: ID): Promise<ResData<PricesEntity>> {
    const data = await this.pricesRepsoitory.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<PricesEntity>(200, "succes", data)
    return resdata
  }
  async create(dto: PricesEntity): Promise<ResData<PricesEntity>> {
    const data = await this.pricesRepsoitory.create(dto);
    const resdata = new ResData<PricesEntity>(201, "created", data);
    return resdata
  }
  async findAll(): Promise<ResData<PricesEntity[]>> {
    const data = await this.pricesRepsoitory.findAll();
    const resdata = new ResData<PricesEntity[]>(200, "succes", data);
    return resdata
  }
}
