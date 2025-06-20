import { OrderEntity } from "../entities/order.entity";

export interface IOrderRepository {
    create(dto:OrderEntity):Promise<OrderEntity>
    findAll():Promise<Array<OrderEntity>>
}