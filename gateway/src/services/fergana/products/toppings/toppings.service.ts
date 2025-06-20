import { Inject, Injectable } from '@nestjs/common';
import { CreateToppingDto } from './dto/create-topping.dto';
import { IToppingService } from './interface/toppings.service';
import { PRODUCT_SERVICE_TOPPING_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ToppingsService {
  private toppingService: IToppingService
  constructor(
    @Inject(PRODUCT_SERVICE_TOPPING_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.toppingService = this.client.getService<IToppingService>('ToppingService');
  }
  create(dto: CreateToppingDto) {
    return this.toppingService.Create(dto)
  }

  async findAll() {
    const result = await lastValueFrom(this.toppingService.FindAll({}));
    return {
      meta: result.meta,
      data: result.data.map((items)=>{
        return {
          id:items.id,
          name:items.name,
          type:items.type,
          imageUrl:items.imageUrl,
          prices:items.prices,
          createAt:items.createAt,
        }
      }),
    };
  }

  async findOne(id:ID){
    const result = await lastValueFrom(this.toppingService.FindOne({id}));
    return {
      meta: result.meta,
      data:{
        id: result.data.id,
        name: result.data.name,
        type: result.data.type,
        imageUrl: result.data.imageUrl,
        prices: result.data.prices,
        createAt: result.data.createAt,
        updateAt: result.data.updateAt,
      }
    };
  }
}
