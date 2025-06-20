import { Inject, Injectable } from '@nestjs/common';
import { ISaucesService } from './interface/sauces.service';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateSaucesDto } from './dto/create-sauce.dto';
import { PRODUCT_SERVICE_SAUCES_MODULE } from 'src/common/config/service.name';
import { ID } from 'src/common/TYPES';

@Injectable()
export class SaucesService {
  private saucesService: ISaucesService;
  constructor(
    @Inject(PRODUCT_SERVICE_SAUCES_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.saucesService = this.client.getService<ISaucesService>('SaucesService');
  }
 async create(dto: CreateSaucesDto) {
    const data = await lastValueFrom(this.saucesService.Create(dto));
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
    const result = await lastValueFrom(this.saucesService.FindAll({}))
    console.log(result);
    
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
    const data = await lastValueFrom(this.saucesService.FindById({id}))
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
    return this.saucesService.Delete({id})
  }
}
