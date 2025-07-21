import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SnacksService } from './snacks.service';
import { SnackEntity } from './entities/snack.entity';
import { ID } from 'src/common/types';
import { IDisavaileabletoppings } from '../pizza/interface/disavailabletoppings';
import { v4 } from 'uuid';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingEntity } from '../toppings/entities/topping.entity';

@Controller()
export class SnacksController {
  constructor(
    @Inject('ISnacksService')
    private readonly snacksService: SnacksService,

    @Inject('IToppingService')
    private readonly toppingService: ToppingsService
  ) {}

  @GrpcMethod('SnackService', 'Create')
  async create(dto: SnackEntity) {
    console.log(dto);
    
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
    

    const topping:any = []


    if (dto.topping && dto.topping.length > 0) {
      for (let i = 0; i < dto.topping.length; i++) {
        const id = dto.topping[i] as unknown as ID
        const data = await this.toppingService.findOne(id)
        topping.push(data)
      }
    }
    

    

    const changeData = {
      id:dto.id,
      name:dto.name,
      description:dto.description,
      fixedprice:fixPrice,
      vegetarian:dto.vegetarian,
      price:price,
      disavailabletoppings:disTopp.length === 0 ? null : disTopp,
      pepper:dto.pepper,
      imageUrl:dto.imageUrl,
      location:dto.location,
      topping:topping
    }
    const snackEntity = Object.assign(new SnackEntity(), changeData);
    
    const resdata = await this.snacksService.create(snackEntity);
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

    const toppingId:string[] = []

    if(data?.topping && data?.topping.length > 0){
      for (let index = 0; index < data?.topping.length; index++) {
        const id = data?.topping[index].id as unknown as ID
        toppingId.push(id)
      }
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
          topping:toppingId.length > 0 ? toppingId : [],
          imageUrl:data?.imageUrl,
          createAt:data?.createAt,
        }
    }
    return changeData2
  }

  @GrpcMethod('SnackService', 'FindAll')
  async findAll() {
  const data = await this.snacksService.findAll();
    
  const newData = {
    meta: data?.meta ?? {}, // agar meta bo'lmasa, bo'sh obyekt qaytariladi
    data: Array.isArray(data?.data)
      ? data.data.map((element) => ({
          id: element.id,
          name: element.name,
          description: element.description,
          price: element.price ?? 0,
          fixedprice: element.fixedprice ?? 0,
          disavailabletoppings: element.disavailabletoppings,
          vegetarian: element.vegetarian,
          pepper: element.pepper,
          imageUrl: element.imageUrl,
          topping:element.topping,
          location:element.location,
          volume: element.volume,
          createAt: element.createAt,
        }))
      : [],
  };
  return newData;
  }

  @GrpcMethod('SnackService', 'FindById')
  async findOne(dto:{id:ID}){
    
    const resdata = await this.snacksService.findOne(dto.id);
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
          location:data?.location,
          createAt:data?.createAt,
        }
    }
    return changeData2
  }
}
