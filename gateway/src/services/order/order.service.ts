import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDER_SERVICE_ORDER_MODULE } from 'src/common/config/service.name';
import { IOrderService } from './interface/order.service';
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
        variants: item.variants?.length === 0 ? [] : item.variants as any,
        toppings: item.toppings?.length === 0 ? [] : item.toppings as any,
        tt: item.tt?.length === 0 ? [] : item.tt as any
      }))
    }
    
    // this is totalprice validation
    let totalPrice = 0 as number
    for(let i = 0; i < changeData.items.length; i++){
        await this.idExistService.id(changeData.items[i].productid, changeData.items[i].type)
        for (let a = 0; a < changeData.items[i].tt.length; a++) {
          await this.idExistService.id(changeData.items[i].tt[a].id, changeData.items[i].tt[a].type)
          const element = changeData.items[i].tt[a];
          // console.log('tt-element', element);
          const tt = await this.idExistService.id(element.ttid, element.size)
          console.log('exist data -- tt-tt', tt);
        }
        for (let a = 0; a < changeData.items[i].toppings.length; a++) {
          await this.idExistService.id(changeData.items[i].toppings[a].id, changeData.items[i].toppings[a].type)
          const element = changeData.items[i].toppings[a];
          // console.log('topping', element);
          const topping = await this.idExistService.id(element.toppingid, element.type)
          console.log('exist data -- topping', topping);

        }
        for (let a = 0; a < changeData.items[i].variants.length; a++) {
          await this.idExistService.id(changeData.items[i].variants[a].id, changeData.items[i].variants[a].type)
          const element = changeData.items[i].variants[a];
          // console.log('variants', element);
          const variants = await this.idExistService.id(element.variantsid, element.type)
          console.log('exist data -- variants', variants);
        }
    }

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
