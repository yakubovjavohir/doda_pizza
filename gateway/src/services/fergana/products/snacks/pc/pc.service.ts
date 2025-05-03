import { Inject, Injectable } from '@nestjs/common';
import { CreatePcDto } from './dto/create-pc.dto';
import { PRODUCT_SERVICE_PC_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { IPcService } from './interface/pc.service';

@Injectable()
export class PcService {
  private pcService: IPcService;
  constructor(
    @Inject(PRODUCT_SERVICE_PC_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.pcService = this.client.getService<IPcService>('PcService');
  }
  create(dto: CreatePcDto) {
    return this.pcService.Create(dto);
  }

  findAll() {
    return this.pcService.FindAll({});
  }
}
