import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "./entities/order.entity";
import { IOrderRepository } from "./interface/order.repository";
import { Repository } from "typeorm";

export class OrderRepository implements IOrderRepository {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly order:Repository<OrderEntity>
    ){}
    async create(dto: OrderEntity): Promise<OrderEntity> {
        const data = this.order.create(dto)
        return await this.order.save(data)
    }
    async findAll(): Promise<Array<OrderEntity>> {
        const data = await this.order.find()
        return data
        
    }
}