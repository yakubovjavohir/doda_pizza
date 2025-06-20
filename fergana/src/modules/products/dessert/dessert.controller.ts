import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { DessertService } from './dessert.service';
import { DessertEntity } from './entities/dessert.entity';
import { ID } from 'src/common/types';
import { IMeta } from 'src/lib/resdata';
@Controller()
export class DessertController {
  constructor(
    @Inject('IDessertService')
    private readonly dessertService: DessertService
  ) {}

  @GrpcMethod('DessertService', 'Create')
  async create(dto: DessertEntity): Promise<{ meta: IMeta; data: any }> {

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
      imageUrl:dto.imageUrl,
    }
    const dessertEntity = Object.assign(new DessertEntity(), changeData);
    
    const resdata = await this.dessertService.create(dessertEntity);
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
          imageUrl:data?.imageUrl,
          createAt:data?.createAt,
        }
    }
    return changeData2
  }

  @GrpcMethod('DessertService', 'findAll')
  async findAll() {
  const data = await this.dessertService.findAll();

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
          imageUrl: element.imageUrl,
          volume: element.volume,
          createAt: element.createAt,
        }))
      : [],
  };
  console.log('this is fergana service data dessert ', newData);
  
  return newData;
  }

  @GrpcMethod('DessertService', 'FindById')
  findOne(dto : {id:ID}) {
    return this.dessertService.findOne(dto.id);
    
  }

  @GrpcMethod('DessertService', 'Delete')
  remove(dto : {id:ID}) {
    return this.dessertService.delete(dto.id);
  }
}