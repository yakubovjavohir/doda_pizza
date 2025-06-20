import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Module({
  imports:[TypeOrmModule.forFeature([OrderEntity])],
  controllers: [OrderController],
  providers: [
    {provide:"IOrderService", useClass:OrderService},
    {provide:"IOrderRepository", useClass:OrderRepository}
  ],
})
export class OrderModule {}
