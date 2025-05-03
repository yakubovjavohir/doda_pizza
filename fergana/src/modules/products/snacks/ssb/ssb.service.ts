import { Inject, Injectable } from '@nestjs/common';
import { ISSBService } from './interface/ssb.service';
import { ResData } from 'src/lib/resdata';
import { SSBEntity } from './entities/ssb.entity';
import { SSBRepository } from './ssb.repository';

@Injectable()
export class SsbService implements ISSBService {
  constructor(
    @Inject('ISSBRepository')
    private readonly ssbRepository: SSBRepository,
  ){}
  async create(dto: SSBEntity): Promise<ResData<SSBEntity>> {
    const data = await this.ssbRepository.create(dto);
    const resdata = new ResData<SSBEntity>(201, "created", data);
    return resdata
  }
  async findAll(): Promise<ResData<SSBEntity[]>> {
    const data = await this.ssbRepository.findAll();
    const resdata = new ResData<SSBEntity[]>(200, "succes", data);
    return resdata
  }
  
}
