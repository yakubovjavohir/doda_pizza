import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SsbService } from './ssb.service';
import { SSBEntity } from './entities/ssb.entity';

@Controller()
export class SsbController {
  constructor(
    @Inject('ISSBService')
    private readonly ssbService: SsbService)
  {}

  @GrpcMethod('SSBService', 'Create')
  create( dto: SSBEntity) {
    return this.ssbService.create(dto);
  }

  @GrpcMethod('SSBService', 'FindAll')
  findAll() {
    return this.ssbService.findAll();
  }
}
