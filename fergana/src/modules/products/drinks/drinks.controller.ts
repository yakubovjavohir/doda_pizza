import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DrinksService } from './drinks.service';
import { DrinkEntity } from './entities/drink.entity';
import { ID } from 'src/common/types';
import { elementAt } from 'rxjs';

@Controller()
export class DrinksController {
  constructor(
    @Inject('IDrinkService')
    private readonly drinksService: DrinksService
  ) {}

  @GrpcMethod('DrinkService', 'Create')
  async create(dto: DrinkEntity) {
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
    dto.fixedprice = fixPrice
    dto.price = price
    const snackEntity = Object.assign(new DrinkEntity(), dto);
    
    const resdata = await this.drinksService.create(snackEntity);
    const data = resdata.data

    return {
      meta:resdata.meta,
      data:{
        id:data?.id,
        name:data?.name,
        description:data?.description,
        fixedprice:data?.fixedprice === null ? 0 : data?.fixedprice,
        vegetarian:data?.vegetarian,
        price:data?.price === null ? 0 : data?.price,
        imageUrl:data?.imageUrl,
        volume:data?.volume,
        gaz:data?.gaz,
        updateAt:data?.updateAt,
        createAt:data?.createAt,
      }
  }
  }


  @GrpcMethod('DrinkService', 'FindAll')
  async findAll() {
    const data = await this.drinksService.findAll();

    return {
      meta:data.meta,
      data:data.data?.map((element)=>({
        id:element.id,
        name:element.name,
        description:element.description,
        fixedprice:element.fixedprice === null ? 0 : element.fixedprice,
        vegetarian:element.vegetarian,
        gaz:element.gaz,
        price:element.price === null ? 0 : element.price,
        imageUrl:element.imageUrl,
        volume:element.volume,
        location:element.location,
        createAt:element.createAt
      }))
    }
  }

  @GrpcMethod('DrinkService', 'FindById')
  async findOne(dto:{id: ID}) {
    const data = await this.drinksService.findOne(dto.id);
    const oneData = data.data
    return {
      meta:data.meta,
      data:{
        id:oneData?.id,
        name:oneData?.name,
        desciption:oneData?.description,
        gaz:oneData?.gaz,
        imageUrl:oneData?.imageUrl,
        vegetarian:oneData?.vegetarian,
        fixedprice:oneData?.fixedprice === null ? 0 : oneData?.fixedprice,
        price:oneData?.price === null ? 0 : oneData?.price,
        volume:oneData?.volume,
        location:oneData?.location,
        createAt:oneData?.createAt
      }
    }
  }

  @GrpcMethod('DrinkService', 'Delete')
  remove(dto:{id: ID}) {
    return this.drinksService.delete(dto.id);
  }
}
