import { Inject, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeeData, ICoffeeService, Volume } from './interface/coffee.service';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ID } from 'src/common/TYPES';
import { PRODUCT_SERVICE_COFFEE_MODULE } from 'src/common/config/service.name';
import { Topping } from '../pizza/interface/pizza.service';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingData } from '../toppings/interface/toppings.service';

@Injectable()
export class CoffeeService {
  private coffeeService: ICoffeeService;
  constructor(
    @Inject(PRODUCT_SERVICE_COFFEE_MODULE) private client: ClientGrpc,
    private readonly toppingService: ToppingsService
  ){}
  onModuleInit() {
    this.coffeeService = this.client.getService<ICoffeeService>('CoffeeService');
  }
  // this is create metod in coffee service //
 async create(dto: CreateCoffeeDto) {
  
    const data = await lastValueFrom(this.coffeeService.Create(dto));
    let toppingData : Topping[] = []
    for (let i = 0; i < dto.topping.length; i++) {
      const id = dto.topping[i] as unknown as ID;
      const topping = await this.toppingService.findOne(id);
      if(topping.data){
        toppingData.push({
          id: topping.data.id,
          name: topping.data.name,
          type: topping.data.type,
          imageUrl: topping.data.imageUrl,
          prices: topping.data.prices.map(p => ({
            size: p.size,
            prices: p.prices,
            createAt: p.createAt,
            updateAt: p.updateAt
          })),
          createAt: topping.data.createAt,
          updateAt: topping.data.updateAt
        })
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
      price:price2,
      url:data.data.imageUrl,
      topping:toppingData,
      createAt: data.data.createAt,
    }
  }
  }


  // this is find all metod in coffee service //
  async findAll() {
    const result = await lastValueFrom(this.coffeeService.FindAll({}));

    let allData:CoffeeData[] = []
    for (let i = 0; i < result.data.length; i++) {
      const element = result.data[i];
      let toppingData : ToppingData[] = []
      for (let j = 0; j < element.topping.length; j++) {
        const id = element.topping[j].id as ID;
        if(id){
          const topping = await this.toppingService.findOne(id)
          if(topping.data){
            toppingData.push(topping.data)
          }
        }
      }
      
      const coffeeData: CoffeeData = {
        id: element.id,
        name: element.name,
        description: element.description,
        fixedprice: element.fixedprice,
        price: element.price,
        imageUrl: element.imageUrl,
        url: element.imageUrl,
        topping: toppingData,
        createAt: element.createAt,
        variants: element.volume,
        volume:null
      };
      allData.push(coffeeData);
      }
      
    return {
      meta: result.meta,
      data: allData
    };
  }
  


  // this is find one metod in coffee service //
  async findOne(id: ID) {
    const data = await lastValueFrom(this.coffeeService.FindById({id}))
    
    let toppingData:Topping[] = []
    const toppingLength = data.data.topping.length === 0 ? null : data.data.topping.length
    
    if(toppingLength){
      for (let i = 0; i < data.data.topping.length; i++) {
        const toppingId = data.data.topping[i].id as ID
        const topping = await this.toppingService.findOne(toppingId);
        if (topping.data) {
          toppingData.push({
            id: topping.data.id,
            name: topping.data.name,
            type: topping.data.type,
            imageUrl: topping.data.imageUrl,
            prices: topping.data.prices.map(p => ({
              size: p.size,
              prices: p.prices,
              createAt: p.createAt,
              updateAt: p.updateAt
            })),
            createAt: topping.data.createAt,
            updateAt: topping.data.updateAt
          })
        }
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
    


const coffeeData = {
    meta: data.meta,
    data: {
      id: data.data.id,
      name: data.data.name,
      description: data.data.description,
      fixed__price: fixPrice2,
      price:price2,
      url:data.data.imageUrl,
      varinats:data.data.volume,
      volume:null,
      topping:toppingData,
      createAt: data.data.createAt,
    }
  }

  return coffeeData
  
  }



  // this is delete metod in coffee service //
  remove(id: ID) {
    return this.coffeeService.Delete({id})
  }
}
