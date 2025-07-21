import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDER_SERVICE_ORDER_MODULE } from 'src/common/config/service.name';
import { Data, IOrderService } from './interface/order.service';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IdValidationService } from '../fergana/products/id-validation/id-validation.service';

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
    const changeData: Data = {
      id: '',
      createAt: '',
      user: dto.user,
      totalprice: dto.totalprice,
      address: dto.address,
      status: dto.status,
      items: dto.items.map(item => ({
        id: item.id,
        type: item.type,
        name: item.name,
        quantity: item.quantity || 0,
        productTotalPrice: item.productTotalPrice || 0,
        variant: item.variant,
        toppings: item.toppings?.length === 0 ? [] : null,
        imageUrl: item.imageUrl,
        disableToppings: item.disabledToppings ?? null
      }))
    }
    
    // this is totalprice validation
    const data = await lastValueFrom(this.orderService.Create(changeData))
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
          id:item.id,
          type:item.type,
          name:item.name,
          quantity:item.quantity,
          productTotalPrice:item.productTotalPrice,
          variant:item.variant,
          toppings:item.toppings || null,
          disableToppings:item.disableToppings || null
        }))
      }))
    }
  }
}
