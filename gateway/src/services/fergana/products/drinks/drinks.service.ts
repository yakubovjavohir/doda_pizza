import { Inject, Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { IDrinksService } from './interface/drinks.service';
import { PRODUCT_SERVICE_DRINKS_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ID } from 'src/common/TYPES';

@Injectable()
export class DrinksService {
  private drinkService: IDrinksService;
  constructor(
    @Inject(PRODUCT_SERVICE_DRINKS_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.drinkService = this.client.getService<IDrinksService>('DrinkService');
  }
 async create(dto: CreateDrinkDto) {
    const data = await lastValueFrom(this.drinkService.Create(dto));
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
      vegetarian: data.data.vegetarian,
      gaz:dto.gaz,
      price:price2,
      url:data.data.imageUrl,
      createAt: data.data.createAt,
      updateAt: data.data.updateAt,
    }
  }
  }

  async findAll() {
    const result = await lastValueFrom(this.drinkService.FindAll({}))
  return {
    meta: result.meta,
    data: result.data.map((element) => ({
      id: element.id,
      name: element.name,
      description: element.description,
      fixed__price: element.fixedprice === 0 ? null : element.fixedprice,
      vegetarian: element.vegetarian,
      price:element.price === 0 ? null : element.price,
      url:element.imageUrl,
      gaz:element.gaz,
      variants:element.volume,
      createAt: element.createAt,
      updateAt: element.updateAt,
    })),
  };
  }

  async findOne(id: ID) {
    const data = await lastValueFrom(this.drinkService.FindById({id}))
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
      vegetarian: data.data.vegetarian,
      gaz:data.data.gaz,
      price:price2,
      url:data.data.imageUrl,
      variants:data.data.volume,
      createAt: data.data.createAt,
      updateAt: data.data.updateAt,
    }
  }
  }

  remove(id: number) {
    return this.drinkService.Delete({id})
  }
}
