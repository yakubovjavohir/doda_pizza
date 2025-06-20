import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SnacksService } from './snacks.service';
import { SnackEntity } from './entities/snack.entity';
import { ID } from 'src/common/types';

@Controller()
export class SnacksController {
  constructor(
    @Inject('ISnacksService')
    private readonly snacksService: SnacksService
  ) {}

  @GrpcMethod('SnackService', 'Create')
  async create(dto: SnackEntity) {
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
          volume: element.volume,
          createAt: element.createAt,
        }))
      : [],
  };
  return newData;
  }

  @GrpcMethod('SnaksService', 'FindById')
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
          createAt:data?.createAt,
        }
    }
    return changeData2
  }
}
