import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { BreakfastService } from './breakfast.service';
import { BreakfastEntity } from './entities/breakfast.entity';
import { ID } from 'src/common/types';
import { v4 } from 'uuid';
import { IDisavaileabletoppings } from '../pizza/interface/disavailabletoppings';
import { Metadata } from '@grpc/grpc-js';

@Controller()
export class BreakfastController{
  constructor(
    @Inject('IBreakfastService')
    private readonly breakfastService: BreakfastService
  ) {}


  @GrpcMethod('BreakfastService', 'Create')
  async create(dto: BreakfastEntity) {

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

    let disTopp: IDisavaileabletoppings[] = [];

    if (Array.isArray(dto.disavailabletoppings) && dto.disavailabletoppings.length > 0) {
      for (let i = 0; i < dto.disavailabletoppings.length; i++) {
        const name = dto.disavailabletoppings[i];
        disTopp.push({
          id: v4(),
          name: name as unknown as string,
        });
      }
    }

    dto.disavailabletoppings = disTopp.length === 0 ? null : disTopp
    dto.fixedprice = fixPrice
    dto.price = price

    const pizzaEntity = Object.assign(new BreakfastEntity(), dto);
    
    const resdata = await this.breakfastService.create(pizzaEntity);

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

    return {
      meta:resdata.meta,
      data:{
        id:data?.id,
        name:data?.name,
        description:data?.description,
        fixedprice:fixPrice2,
        imageUrl:data?.imageUrl,
        vegetarian:data?.vegetarian,
        price:price,
        disavailabletoppings:data?.disavailabletoppings,
        volume:data?.volume,
        createAt:data?.createAt
      } as BreakfastEntity
    }
  }

  @GrpcMethod('BreakfastService', 'FindAll')
  async findAll() {
    const data = await this.breakfastService.findAll();

    return {
      meta:data.meta,
      data:data.data?.map((element)=>({
        id:element.id,
        name:element.name,
        description:element.description,
        fixedprice:element.fixedprice === null ? 0 : element.fixedprice,
        imageUrl:element.imageUrl,
        disavailabletoppings:element.disavailabletoppings,
        price:element.price === null ? 0 : element.price,
        vegetarianf:element.vegetarian,
        createAt:element.createAt,
        location:element.location,
        volume:element.volume
      }))
    }
  }

  @GrpcMethod('BreakfastService', 'FindById')

  async findOne(dto:{id:ID}) {
    const resdata = await this.breakfastService.findOne(dto.id);
    const data = resdata.data
    return {
      meta:resdata.meta,
      data:{
        id:data?.id,
        name:data?.name,
        description:data?.description,
        fixedprice:data?.fixedprice === null ? 0 : data?.fixedprice,
        imageUrl:data?.imageUrl,
        vegetarian:data?.vegetarian,
        price:data?.price === null ? 0 : data?.price,
        disavailabletoppings:data?.disavailabletoppings,
        volume:data?.volume,
        location:data?.location,
        createAt:data?.createAt
      } as BreakfastEntity
    }
 }

  @GrpcMethod('BreakfastService', 'Delete')
  remove(dto:{id:ID}) {
    return this.breakfastService.delete(dto.id);
  }
}
