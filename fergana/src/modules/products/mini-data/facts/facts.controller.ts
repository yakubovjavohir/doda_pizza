import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { FactsService } from './facts.service';
import { FactsEntity } from './entities/fact.entity';
import { ID } from 'src/common/types';

@Controller()
export class FactsController {
  constructor(
    @Inject('IFactService')
    private readonly factsService: FactsService
  ) {}

  @GrpcMethod('FactService', 'Create')
  create(dto: FactsEntity) {
    return this.factsService.create(dto);
  }

  @GrpcMethod('FactService', 'FindAll')
  findAll() {
    return this.factsService.findAll();
  }

  @GrpcMethod('FactService', 'FindOne')
  findOne(dto:{id: ID}) {
    return this.factsService.findOne(dto.id);
  }
}
