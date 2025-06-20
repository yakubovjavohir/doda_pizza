import { Inject, Injectable } from '@nestjs/common';
import { ITTService } from './interface/t-t.service';
import { TTRepository } from './t-t.repository';
import { TTEntity } from './entities/t-t.entity';
import { ResData } from 'src/lib/resdata';
import { ID } from 'src/common/types';
import { NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class TTService implements ITTService{
  constructor(
    @Inject('ITTRepository')
    private readonly ttRepository: TTRepository,
  ){}
  async findOne(id: ID): Promise<ResData<TTEntity>> {
    const data = await this.ttRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<TTEntity>(200, "succes", data)
    return resdata
  }
  async create(dto: TTEntity): Promise<ResData<TTEntity>> {
    const data = await this.ttRepository.create(dto);
    const resdata = new ResData<TTEntity>(201, "created", data);
    return resdata
  }
  async findAll(): Promise<ResData<TTEntity[]>> {
    const data = await this.ttRepository.findAll();
    const resdata = new ResData<TTEntity[]>(200, "succes", data);
    return resdata
  }
  
}
