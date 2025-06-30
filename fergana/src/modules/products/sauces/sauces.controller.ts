import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { SaucesService } from './sauces.service';
import { SaucesEntity } from './entities/sauce.entity';
import { ID } from 'src/common/types';

@Controller()
export class SaucesController {
  constructor(
    @Inject('ISaucesService')
    private readonly saucesService: SaucesService
  ) {}

  @GrpcMethod('SaucesService', 'Create')
  create(dto: SaucesEntity) {
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
    return this.saucesService.create(dto);
  }

  @GrpcMethod('SaucesService', 'FindAll')
  async findAll() {
    const {meta, data} = await this.saucesService.findAll();
    return {
      meta:meta,
      data:data?.map((el)=>({
        id:el.id,
        name:el.name,
        description:el.description,
        fixedprice:el.fixedprice === null ? 0 : el.fixedprice,
        price:el.price === null ? 0 : el.price,
        volume:el.volume,
        imageUrl:el.imageUrl,
        createAt:el.createAt
      }))
    }
  }

  @GrpcMethod('SaucesService', 'FindById')
  async findOne(dto:{id:ID}) {
    const {data, meta} = await this.saucesService.findOne(dto.id);
    return {
      meta:meta,
      data:{
        id:data?.id,
        name:data?.name,
        description:data?.description,
        fixedprice:data?.fixedprice === null ? 0 : data?.fixedprice,
        price:data?.price === null ? 0 : data?.price,
        volume:data?.volume,
        createAt:data?.createAt
      }
    }
  }

  @GrpcMethod('SaucesService', 'Delete')
  remove(dto:{id:ID}) {
    return this.saucesService.delete(dto.id);
  }
}
