import { Inject, Injectable } from '@nestjs/common';
import { CreateBreakfastDto } from './dto/create-breakfast.dto';
import { ID } from 'src/common/TYPES';
import { ClientGrpc } from '@nestjs/microservices';
import { IBreakfastService } from './interface/breakfast.service';
import { lastValueFrom } from 'rxjs';
import { PRODUCT_SERVICE_BREAKFAST_MODULE } from 'src/common/config/service.name';

@Injectable()
export class BreakfastService {
  private breakfastService: IBreakfastService;
  constructor(
    @Inject(PRODUCT_SERVICE_BREAKFAST_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.breakfastService = this.client.getService<IBreakfastService>('BreakfastService');
  }
 async create(dto: CreateBreakfastDto) {
    const data = await lastValueFrom(this.breakfastService.Create(dto));
    let fixPrice2: number | null = 0
    let price2: number | null = 0


    if(data.data.fixedprice === 0){
      fixPrice2 = null
    } else {
      fixPrice2 = data.data.fixedprice
    }
    if(data.data.price === 0){
      price2 = null
    } else {
      price2 = data.data.price
    }
return {
    meta: data.meta,
    data: {
      id: data.data.id,
      name: data.data.name,
      description: data.data.description,
      fixed__price: fixPrice2,
      price:price2,
      url:data.data.imageUrl,
      createAt: data.data.createAt,
    }
  }
  }

  async findAll() {
    const result = await lastValueFrom(this.breakfastService.FindAll({}))
  return {
    meta: result.meta,
    data: result.data.map((element) => ({
      id: element.id,
      name: element.name,
      description: element.description,
      fixed__price: element.fixedprice === 0 ? null : element.fixedprice,
      price:element.price === 0 ? null : element.price,
      url:element.imageUrl,
      variants:element.volume,
      createAt: element.createAt,
    })),
  };
  }

  async findOne(id: ID) {
    const data = await lastValueFrom(this.breakfastService.FindById({id}))
    let fixPrice2: number | null = 0
    let price2: number | null = 0


    if(data.data.fixedprice === 0){
      fixPrice2 = null
    } else {
      fixPrice2 = data.data.fixedprice
    }
    if(data.data.price === 0){
      price2 = null
    } else {
      price2 = data.data.price
    }
    


return {
    meta: data.meta,
    data: {
      id: data.data.id,
      name: data.data.name,
      description: data.data.description,
      fixed__price: fixPrice2,
      price:price2,
      url:data.data.imageUrl,
      variants:data.data.volume,
      createAt: data.data.createAt,
    }
  }
  }

  remove(id: ID) {
    return this.breakfastService.Delete({id})
  }
}
