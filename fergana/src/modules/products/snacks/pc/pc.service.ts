import { Inject, Injectable } from '@nestjs/common';
import { IPcService } from './interface/pc.service';
import { PcRepository } from './pc.repository';
import { PcEntity } from './entities/pc.entity';
import { ResData } from 'src/lib/resdata';

@Injectable()
export class PcService implements IPcService{
  constructor(
    @Inject('IPcRepository')
    private readonly pcRepository: PcRepository,
  ){}
  async create(dto: PcEntity): Promise<ResData<PcEntity>> {
    const data = await this.pcRepository.create(dto);
    const resdata = new ResData<PcEntity>(201, "created", data);
    return resdata
  }
  async findAll(): Promise<ResData<PcEntity[]>> {
    const data = await this.pcRepository.findAll();
    const resdata = new ResData<PcEntity[]>(200, "succes", data);
    return resdata
  }
}
