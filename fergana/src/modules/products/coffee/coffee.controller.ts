import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { CoffeeService } from './coffee.service';
import { CoffeeEntity } from './entities/coffee.entity';
import { ID } from 'src/common/types';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingEntity } from '../toppings/entities/topping.entity';


@Controller()
export class CoffeeController {
  constructor(
    @Inject('ICoffeeService')
    private readonly coffeeService: CoffeeService,

    @Inject('IToppingService')
    private readonly toppingService: ToppingsService
  ) {}


  @GrpcMethod('CoffeeService', 'Create')
  async create(dto: CoffeeEntity) {
    const changeData = {
      id:dto.id,
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixedprice === 0 ? null : dto.fixedprice,
      imageUrl:dto.imageUrl,
      price:dto.price === 0 ? null : dto.price,
      volume:dto.volume,
      product:dto.product,
      type:dto.type,
      topping:dto.topping,
      createAt:dto.createAt,
    }

    const data = await this.coffeeService.create(changeData)
    
    
    return {
      meta:data.meta,
      data:{
        id:data.data?.id,
        name:data.data?.name,
        description:data.data?.description,
        fixedprice:data.data?.fixedprice === 0 ? null : data.data?.fixedprice,
        imageUrl:data.data?.imageUrl,
        price:data.data?.price === 0 ? null : data.data?.price,
        volume:data.data?.volume,
        topping:data.data?.topping,
        createAt:data.data?.createAt,
      }
    }

    
  }

  @GrpcMethod('CoffeeService', 'FindAll')
  async findAll() {
    const data = await this.coffeeService.findAll();
    return {
      meta:data.meta,
      data:(data.data ?? []).map(item => ({
        id:item.id,
        name:item.name,
        description:item.description,
        fixedprice:item.fixedprice,
        topping:item.topping.length === 0 ? [0] : item.topping,  
        imageUrl:item.imageUrl,
        price:item.price,
        volume:item.volume,
        createAt:item.createAt,
      })) 
    }
  }

  @GrpcMethod('CoffeeService', 'FindById')
  async findOne(dto:{id: ID}) {
    const data = await this.coffeeService.findOne(dto.id);
    console.log(data);
    
    return {
      meta:data.meta,
      data:{
        id:data.data?.id,
        name:data.data?.name,
        description:data.data?.description,
        fixedprice:data.data?.fixedprice,
        topping:data.data?.topping.length === 0 ? [0] : data.data?.topping,
        imageUrl:data.data?.imageUrl,
        price:data.data?.price,
        volume:data.data?.volume,
        createAt:data.data?.createAt,
      }
    }
  }

  @GrpcMethod('CoffeeService', 'Delete')
  remove(dto:{id:ID}) {
    return this.coffeeService.delete(dto.id);
  }
}
