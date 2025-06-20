import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SaucesService } from './sauces.service';
import { SaucesEntity } from './entities/sauce.entity';
import { ID } from 'src/common/types';

@Controller()
export class SaucesController {
  constructor(
    @Inject('ISaucesService')
    private readonly saucesService: SaucesService
  ) {}

  @GrpcMethod('SaucesService', 'Create')
  create(dto: SaucesEntity) {
    return this.saucesService.create(dto);
  }

  @GrpcMethod('SaucesService', 'FindAll')
  findAll() {
    return this.saucesService.findAll();
  }

  @GrpcMethod('SaucesService', 'FindById')
  findOne(dto:{id:ID}) {
    return this.saucesService.findOne(dto.id);
  }

  @GrpcMethod('SaucesService', 'Delete')
  remove(dto:{id:ID}) {
    return this.saucesService.delete(dto.id);
  }
}
