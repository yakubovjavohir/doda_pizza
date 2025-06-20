import { Inject, Injectable } from '@nestjs/common';
import { IMilkshakesService } from './interface/milkshakes.service';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateMilkshakesDto } from './dto/create-milkshake.dto';
import { PRODUCT_SERVICE_MILKSHAKES_MODULE } from 'src/common/config/service.name';
import { ID } from 'src/common/TYPES';

@Injectable()
export class MilkshakesService {
  private milkshakesService: IMilkshakesService;
  constructor(
    @Inject(PRODUCT_SERVICE_MILKSHAKES_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.milkshakesService = this.client.getService<IMilkshakesService>('MilkshakesService');
  }
 async create(dto: CreateMilkshakesDto) {
    const data = await lastValueFrom(this.milkshakesService.Create(dto));
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
    const result = await lastValueFrom(this.milkshakesService.FindAll({}))
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
    const data = await lastValueFrom(this.milkshakesService.FindById({id}))
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

  remove(id: number) {
    return this.milkshakesService.Delete({id})
  }
}
