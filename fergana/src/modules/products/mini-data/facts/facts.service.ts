import { Inject, Injectable } from '@nestjs/common';
import { FactRepository } from './facts.repository';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resdata';
import { FactsEntity } from './entities/fact.entity';
import { NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class FactsService {
  constructor(
    @Inject('IFactRepository')
    private readonly pricesRepsoitory: FactRepository,
  ){}
  async findOne(id: ID): Promise<ResData<FactsEntity>> {
    const data = await this.pricesRepsoitory.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<FactsEntity>(200, "succes", data)
    return resdata
  }
  async create(dto: FactsEntity): Promise<ResData<FactsEntity>> {
    const data = await this.pricesRepsoitory.create(dto);
    const resdata = new ResData<FactsEntity>(201, "created", data);
    return resdata
  }
  async findAll(): Promise<ResData<FactsEntity[]>> {
    const data = await this.pricesRepsoitory.findAll();
    const resdata = new ResData<FactsEntity[]>(200, "succes", data);
    return resdata
  }
}
