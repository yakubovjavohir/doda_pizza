import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SnacksService } from './snacks.service';
import { SnackEntity } from './entities/snack.entity';

@Controller()
export class SnacksController {
  constructor(
    @Inject('ISnacksService')
    private readonly snacksService: SnacksService
  ) {}

  @GrpcMethod('SnackService', 'Create')
  create(dto: SnackEntity) {
    return this.snacksService.create(dto);
  }

  @GrpcMethod('SnackService', 'FindAll')
  findAll() {
    return this.snacksService.findAll();
  }
}
