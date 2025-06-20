import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { PizzaService } from './pizza.service';
import { PizzaEntity } from './entities/pizza.entity';
import { ID } from 'src/common/types';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingEntity } from '../toppings/entities/topping.entity';

@Controller()
export class PizzaController {
  constructor(
    @Inject("IPizzaService")
    private readonly pizzaService: PizzaService,

    @Inject("IToppingService")
    private readonly toppingService: ToppingsService,
  ) {}

  @GrpcMethod('PizzaService', 'Create')
  async create(dto: PizzaEntity): Promise<{ meta: any; data: any }> {
    console.log('18-06-2025 ', dto);
    
    let fixPrice: number | null = 0
    let price: number | null = 0


    if(dto.fixedprice === 0){
      fixPrice = null
    } else {
      fixPrice = dto.fixedprice
    }
    if(dto.price === 0){
      price = null
    } else {
      price = dto.price
    }


    const changeData = {
      id:dto.id,
      name:dto.name,
      description:dto.description,
      fixedprice:fixPrice,
      vegetarian:dto.vegetarian,
      price:price,
      disavailabletoppings:dto.disavailabletoppings,
      pepper:dto.pepper,
      imageUrl:dto.imageUrl,
      topping:dto.topping
    }
    const pizzaEntity = Object.assign(new PizzaEntity(), changeData);
    
    const resdata = await this.pizzaService.create(pizzaEntity);
    
    const data = resdata.data

    let fixPrice2: number | null = null
    let price2: number | null = null


    if(data?.fixedprice === null){
      fixPrice2 = 0
    } else {
      fixPrice2 = data?.fixedprice ?? null
    }
    if(data?.price === null){
      price2 = 0
    } else {
      price2 = data?.price ?? null
    }

    const changeData2 = {
        meta:resdata.meta,
        data:{
          id:data?.id,
          name:data?.name,
          description:data?.description,
          fixedprice:fixPrice2,
          vegetarian:data?.vegetarian,
          price:price2,
          disavailabletoppings:data?.disavailabletoppings,
          pepper:data?.pepper,
          imageUrl:data?.imageUrl,
          topping:data?.topping,
          createAt:data?.createAt,
          updateAt:data?.updateAt
        }
    }
    return changeData2
  }

  @GrpcMethod('PizzaService', 'FindAll')
  async findAll() {
    const data = await this.pizzaService.findAll();
    
    return {
      meta:data.meta,
      data:data.data?.map((element)=>({
        id:element.id,
        name:element.name,
        description:element.description,
        price:element.price === null ? 0 : element.price,
        imageUrl:element.imageUrl,
        fixedprice:element.fixedprice === null ? 0 : element.fixedprice,
        disavailabletoppings:element.disavailabletoppings,
        vegetarian:element.vegetarian,
        pepper:element.pepper,
        variants:element.tt,
        topping:element.topping,
        createAt:element.createAt,
        updateAt:element.updateAt
      }))
    }    
  }

  @GrpcMethod('PizzaService', 'FindOne')
  async findOne(dto: { id: ID }) {
    const resdata = await this.pizzaService.findOne(dto.id);
    
    const data = resdata.data

    let fixPrice2: number | null = null
    let price2: number | null = null


    if(data?.fixedprice === null){
      fixPrice2 = 0
    } else {
      fixPrice2 = data?.fixedprice ?? null
    }
    if(data?.price === null){
      price2 = 0
    } else {
      price2 = data?.price ?? null
    }

    const changeData2 = {
        meta:resdata.meta,
        data:{
          id:data?.id,
          name:data?.name,
          description:data?.description,
          fixedprice:fixPrice2,
          vegetarian:data?.vegetarian,
          price:price2,
          disavailabletoppings:data?.disavailabletoppings,
          pepper:data?.pepper,
          imageUrl:data?.imageUrl,
          variants:data?.tt,
          topping:data?.topping,
          createAt:data?.createAt,
          updateAt:data?.updateAt
        }
    }
    return changeData2
  }

  @GrpcMethod('PizzaService', 'Delete')
  remove(dto: { id: ID }) {
    return this.pizzaService.delete(dto.id);
  }
}
