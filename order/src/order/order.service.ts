import { Inject, Injectable } from '@nestjs/common';
import { IOrderService } from './interface/order.service';
import { ResData } from 'src/lib/resdata';
import { OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService implements IOrderService{
  constructor(
    @Inject("IOrderRepository")
    private readonly orderRepository:OrderRepository
  ){}
  async create(dto: OrderEntity): Promise<ResData<OrderEntity>> {
    
    const data = await this.orderRepository.create(dto)
    const resdata = new ResData<OrderEntity>(201, "created order", data)
    return resdata

  }
  async findAll(): Promise<ResData<OrderEntity[]>> {
    const data = await this.orderRepository.findAll()
    const resdata = new ResData<OrderEntity[]>(200, "succes", data)
    return resdata
  }
}
