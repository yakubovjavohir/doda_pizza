import { Inject, Injectable } from '@nestjs/common';
import { CreateSsbDto } from './dto/create-ssb.dto';
import { ISSBService } from './interface/ssb.service';
import { PRODUCT_SERVICE_SSB_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class SsbService {
  private ssbService: ISSBService;
  constructor(
    @Inject(PRODUCT_SERVICE_SSB_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.ssbService = this.client.getService<ISSBService>('SSBService');
  }
  create(dto: CreateSsbDto) {
    console.log('-----', dto);
    
    return this.ssbService.Create(dto);
  }

  findAll() {
    return `This action returns all ssb`;
  }
}
