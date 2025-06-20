import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { PricesService } from './prices.service';
import { PricesEntity } from './entities/price.entity';
import { ID } from 'src/common/types';


@Controller()
export class PricesController {
  constructor(
    @Inject('IPricesService')
    private readonly pricesService: PricesService
  ) {}

  @GrpcMethod('PricesService', 'Create')
  create(@Payload() dto: PricesEntity) {
    return this.pricesService.create(dto);
  }

  @GrpcMethod('PricesService', 'FindAll')
  findAll() {
    return this.pricesService.findAll();
  }

  @GrpcMethod('PricesService', 'FindOne')
  findOne(dto:{id: ID}) {
    return this.pricesService.findOne(dto.id);
  }
}
