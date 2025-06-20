import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { TTService } from './t-t.service';
import { TTEntity } from './entities/t-t.entity';
import { ID } from 'src/common/types';

@Controller()
export class TTController {
  constructor(
    @Inject('ITTService')
    private readonly tTService: TTService
  ) {}

  @GrpcMethod('TTService', 'Create')
  create(@Payload() dto: TTEntity) {
    return this.tTService.create(dto);
  }

  @GrpcMethod('TTService', 'FindAll')
  findAll() {
    return this.tTService.findAll();
  }

  @GrpcMethod('TTService', 'FindOne')
  findOne(dto:{id:ID}) {
    return this.tTService.findOne(dto.id);
  }
}
