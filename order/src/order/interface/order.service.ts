import { ResData } from "src/lib/resdata";
import { OrderEntity } from "../entities/order.entity";

export interface IOrderService {
    create(dto:OrderEntity):Promise<ResData<OrderEntity>>
    findAll():Promise<ResData<OrderEntity[]>>
}