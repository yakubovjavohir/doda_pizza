import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { ToppingsService } from './toppings.service';
import { ToppingEntity } from './entities/topping.entity';
import { ID } from 'src/common/types';

@Controller()
export class ToppingsController {
  constructor(
    @Inject("IToppingService")
    private readonly toppingsService: ToppingsService
  ) {}

  @GrpcMethod("ToppingService", "Create")
  create(dto: ToppingEntity) {
    return this.toppingsService.create(dto);
  }

  @GrpcMethod("ToppingService", "FindAll")
  async findAll() {
    const data = await this.toppingsService.findAll();
    
    const returnData = {
      meta:data.meta,
      data:data.data?.map(item=>{
        return {
          id:item.id,
          name:item.name,
          imageUrl:item.imageUrl,
          prices:item.prices,
          type:item.type,
          createAt:item.createAt,
          updateAt:item.updateAt,
        }
      })
    };
    console.log(returnData);
    
    return returnData;
  }

  @GrpcMethod("ToppingService", "FindOne")
  async findOne(dto:{id:ID}) {
    const data = await this.toppingsService.findOne(dto.id);
    const returnData = {
      meta:data.meta,
      data:{
        id:data.data?.id,
        name:data.data?.name,
        imageUrl:data.data?.imageUrl,
        prices:data.data?.prices,
        type:data.data?.type,
        createAt:data.data?.createAt,
        updateAt:data.data?.updateAt,
      }
    };
    console.log(returnData);
    
    return returnData;
  }
}
