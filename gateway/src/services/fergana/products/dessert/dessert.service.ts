import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_SERVICE_DESSERT_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateDessertDto } from './dto/create-dessert.dto';
import { IDessertService } from './interface/dessert.service';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DessertService {
  private dessertService: IDessertService;
  constructor(
    @Inject(PRODUCT_SERVICE_DESSERT_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.dessertService = this.client.getService<IDessertService>('DessertService');
  }
 async create(dto: CreateDessertDto) {
    const data = await lastValueFrom(this.dessertService.Create(dto));
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
      vegetarian: data.data.vegetarian ,
      dis_available_toppings: data.data.disavailabletoppings,
      price:price2,
      url:data.data.imageUrl,
      createAt: data.data.createAt,
      updateAt: data.data.updateAt,
    }
  }
  }

  async findAll() {
    const result = await lastValueFrom(this.dessertService.FindAll({}))
    
  const data =  {
    meta: result.meta,
    data: result.data.map((element) => ({
      id: element.id,
      name: element.name,
      description: element.description,
      fixed__price: element.fixedprice === 0 ? null : element.fixedprice,
      vegetarian: element.vegetarian,
      price:element.price === 0 ? null : element.price,
      dis_available_toppings: element.disavailabletoppings,
      url:element.imageUrl,
      pepper:null,
      varinats:element.volume,
      createAt: element.createAt,
    })),
  };
  return data
  }

  async findOne(id:ID){
  const result = await lastValueFrom(this.dessertService.FindById({id}));
  const data = result.data
  const changeData = {
    meta: data.meta,
    data: {
      id: data.id,
      name: data.name,
      description: data.description,
      fixed__price: data.fixedprice === 0 ? null : data.fixedprice,
      vegetarian: data.vegetarian,
      dis_available_toppings: data.disavailabletoppings,
      price:data.price === 0 ? null : data.price,
      url:data.imageUrl,
      createAt: data.createAt,
      updateAt: data.updateAt,
    }
  }
  return changeData
  
  }

  delete(id:ID){
    return this.dessertService.Delete({id})
  }
}
