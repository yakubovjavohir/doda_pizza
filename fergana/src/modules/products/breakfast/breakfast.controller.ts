import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { BreakfastService } from './breakfast.service';
import { BreakfastEntity } from './entities/breakfast.entity';
import { ID } from 'src/common/types';

@Controller()
export class BreakfastController{
  constructor(
    @Inject('IBreakfastService')
    private readonly breakfastService: BreakfastService
  ) {}


  @GrpcMethod('BreakfastService', 'Create')
  create(dto: BreakfastEntity) {
    return this.breakfastService.create(dto);
  }

  @GrpcMethod('BreakfastService', 'FindAll')
  findAll() {
    return this.breakfastService.findAll();
  }

  @GrpcMethod('BreakfastService', 'FindById')

  findOne(dto:{id:ID}) {
    return this.breakfastService.findOne(dto.id);
  }

  @GrpcMethod('BreakfastService', 'Delete')
  remove(dto:{id:ID}) {
    return this.breakfastService.delete(dto.id);
  }
}
