import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { PcService } from './pc.service';
import { PcEntity } from './entities/pc.entity';

@Controller()
export class PcController {
  constructor(
    @Inject('IPcService')
    private readonly pcService: PcService
  ) {}

  @GrpcMethod('PcService', 'Create')
  create(createPcDto: PcEntity) {
    console.log(createPcDto);
    
    return this.pcService.create(createPcDto);
  }

  @GrpcMethod('PcService', 'FindAll')
  findAll() {
    return this.pcService.findAll();
  }
}
