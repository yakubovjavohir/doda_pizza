import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';

@Controller()
export class OrderController {
  constructor(
    @Inject("IOrderService")
    private readonly orderService: OrderService
  ) {}


  @GrpcMethod("OrderService", "Create")
  create(@Payload() dto: OrderEntity) {
    console.log(dto);
    
    return this.orderService.create(dto);
  }

  @GrpcMethod("OrderService", "FindAll")
  async findAll() {
    const data = await this.orderService.findAll();
    return data
  }
}
