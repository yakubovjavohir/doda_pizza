import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { MilkshakesService } from './milkshakes.service';
import { MilkshakesEntity } from './entities/milkshake.entity';
import { ID } from 'src/common/types';

@Controller()
export class MilkshakesController {
  constructor(
    @Inject('IMilkshakesService')
    private readonly milkshakesService: MilkshakesService
  ) {}

  @GrpcMethod('MilkshakesService', 'Create')
  create(dto: MilkshakesEntity) {
    return this.milkshakesService.create(dto);
  }

  @GrpcMethod('MilkshakesService', 'FindAll')
  findAll() {
    return this.milkshakesService.findAll();
  }

  @GrpcMethod('MilkshakesService', 'FindById')
  findOne(dto:{id:ID}) {
    return this.milkshakesService.findOne(dto.id);
  }

  @GrpcMethod('MilkshakesService', 'Delete')
  remove(dto:{id:ID}) {
    return this.milkshakesService.delete(dto.id);
  }
}
