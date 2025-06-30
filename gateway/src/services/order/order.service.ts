import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDER_SERVICE_ORDER_MODULE } from 'src/common/config/service.name';
import { IOrderService } from './interface/order.service';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IdValidationService } from '../fergana/products/id-validation/id-validation.service';
import { ID } from 'src/common/TYPES';

@Injectable()
export class OrderService {
  private orderService: IOrderService
  constructor(
    @Inject(ORDER_SERVICE_ORDER_MODULE) private client: ClientGrpc,
    private readonly idExistService: IdValidationService
  ){}
  onModuleInit() {
    this.orderService = this.client.getService<IOrderService>('OrderService');
  }
  async create(dto:CreateOrderDto){
    const changeData = {
      user: dto.user,
      totalprice: dto.totalprice,
      address: dto.address,
      status: dto.status,
      items: dto.items.map(item => ({
        productid: item.productid,
        type: item.type,
        quantity: item.quantity || 0,
        price: item.price || 0,
        variants: item.variants?.length === 0 ? [] : item.variants as ID[],
        toppings: item.toppings?.length === 0 ? [] : item.toppings as ID[],
        tt: item.tt?.length === 0 ? [] : item.tt as ID[]
      }))
    }
    
    // this is totalprice validation
    const data = await lastValueFrom(this.orderService.Create(changeData))
    console.log('---', data);
    
    return data
  }

  async findAll(){
    const result = await lastValueFrom(this.orderService.FindAll({}))
    
    
    return {
      meta:result.meta,
      data:result.data.map(item => ({
        id:item.id,
        user:item.user,
        totalprice:item.totalprice,
        address:item.address,
        status:item.status,
        items:item.items.map(item => ({
          productid:item.productid,
          type:item.type,
          quantity:item.quantity,
          price:item.price,
          variants:item.variants === null ? [] : item.variants,
          toppings:item.toppings === null ? [] : item.toppings,
          tt:item.tt === null ? [] : item.tt
        }))
      }))
    }
  }
}
