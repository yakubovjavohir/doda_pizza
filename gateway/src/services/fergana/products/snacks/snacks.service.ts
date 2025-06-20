import { Inject, Injectable } from '@nestjs/common';
import { CreateSnackDto } from './dto/create-snack.dto';
import { ISnackService } from './interface/snack.service';
import { PRODUCT_SERVICE_SNACKS_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ID } from 'src/common/TYPES';

@Injectable()
export class SnacksService {
  private snackService: ISnackService;
  constructor(
    @Inject(PRODUCT_SERVICE_SNACKS_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.snackService = this.client.getService<ISnackService>('SnackService');
  }
  async create(dto: CreateSnackDto) {
    const data = await lastValueFrom(this.snackService.Create(dto));
    
    let fixPrice2: number | null = 0
    let price2: number | null = 0


    if(Number(data.data.fixedprice) === 0){
      fixPrice2 = null
    } else {
      fixPrice2 = Number(data.data.fixedprice)
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
      pepper: data.data.pepper,
      dis_available_toppings: data.data.disavailabletoppings,
      price:price2,
      url:data.data.imageUrl,
      createAt: data.data.createAt,
    }
  }
  }

  
  async findAll() {
    const result = await lastValueFrom(this.snackService.FindAll({}));
  const data = {
    meta: result.meta,
    data: result.data.map((element) => ({
      id: element.id,
      name: element.name,
      description: element.description,
      fixed__price: element.fixedprice === 0 ? null : element.fixedprice,
      vegetarian: element.vegetarian,
      pepper: element.pepper,
      price:element.price === 0 ? null : element.price,
      dis_available_toppings: element.disavailabletoppings,
      url:element.imageUrl,
      variants: element.volume,
      createAt: element.createAt,
    })),
  };
  return data
}

async findOne(id:ID) {
  const data = await lastValueFrom(this.snackService.FindOne({id}));
    
  let fixPrice2: number | null = 0
  let price2: number | null = 0


  if(Number(data.data.fixedprice) === 0){
    fixPrice2 = null
  } else {
    fixPrice2 = Number(data.data.fixedprice)
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
    pepper: data.data.pepper,
    dis_available_toppings: data.data.disavailabletoppings,
    price:price2,
    url:data.data.imageUrl,
    createAt: data.data.createAt,
  }
}
}


}
