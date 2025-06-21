import { Inject, Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { IPizzaService, PizzaData, Topping } from './interface/pizza.service';
import { PRODUCT_SERVICE_PIZZA_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingData } from '../toppings/interface/toppings.service';

@Injectable()
export class PizzaService {
  private pizzaService: IPizzaService;
  constructor(
    @Inject(PRODUCT_SERVICE_PIZZA_MODULE) private client: ClientGrpc,
    private readonly toppingService: ToppingsService
  ){}
  onModuleInit() {
    this.pizzaService = this.client.getService<IPizzaService>('PizzaService');
  } 
  async create(dto: CreatePizzaDto) {
    const data = await lastValueFrom(this.pizzaService.Create(dto));

    let toppingData : ToppingData[] = []
    for (let i = 0; i < dto.topping.length; i++) {
      const id = dto.topping[i];
      const topping = await this.toppingService.findOne(id)
      if(topping.data){
        toppingData.push(topping.data)
      }
    }
    
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
      pepper: data.data.pepper,
      dis_available_toppings: data.data.disavailabletoppings,
      price:price2,
      url:data.data.imageUrl,
      toppings:toppingData,
      createAt: data.data.createAt,
      updateAt: data.data.updateAt,
    }
  }
  }

  async findAll() {
    const result = await lastValueFrom(this.pizzaService.FindAll({}));
    console.log('🍕 GRPC PizzaService result:', result);
  
    const allData: PizzaData[] = [];
  
    if (!result?.data || !Array.isArray(result.data)) {
      return {
        meta: result?.meta || { message: 'No data', statusCode: 204 },
        data: [],
      };
    }
  
    for (const element of result.data) {
      const toppingData: ToppingData[] = [];
  
      if (Array.isArray(element.topping)) {
        for (const toppingItem of element.topping) {
          const id = toppingItem?.id as ID;
          if (!id) continue;
  
          const topping = await this.toppingService.findOne(id);
          if (topping?.data) {
            toppingData.push(topping.data);
          }
        }
      }
  
      const pizzaData: PizzaData = {
        id: element.id,
        name: element.name ?? '',
        description: element.description ?? '',
        fixedprice: element.fixedprice ?? null,
        price: element.price ?? null,
        imageUrl: element.imageUrl ?? '',
        url: element.imageUrl ?? '',
        disavailabletoppings: element.disavailabletoppings ?? [],
        vegetarian: element.vegetarian ?? false,
        pepper: element.pepper ?? false,
        variants: element.variants ?? [],
        topping: toppingData,
        createAt: element.createAt ?? new Date(),
        updateAt: element.updateAt ?? new Date(),
      };
  
      allData.push(pizzaData);
    }
  
    return {
      meta: result.meta,
      data: allData,
    };
  }
  
  
    

  async findOne(id: ID) {
    const data = await lastValueFrom(this.pizzaService.FindOne({id}))
    if (!data.data) {
      throw new Error('Pizza not found');
    }
    let toppingData : ToppingData[] = []
    for (let i = 0; i < data.data.topping.length; i++) {
      const id = data.data.topping[i].id as ID;
      const topping = await this.toppingService.findOne(id)
      if(topping.data){
        toppingData.push(topping.data)
      }
    }

    


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
      pepper: data.data.pepper,
      dis_available_toppings: data.data.disavailabletoppings,
      price:price2,
      url:data.data.imageUrl,
      variants: data.data.variants,
      toppings:toppingData,
      createAt: data.data.createAt,
      updateAt: data.data.updateAt,
    }
  }
  }

  remove(id: ID) {
    return this.pizzaService.Delete({id});
  }
}

