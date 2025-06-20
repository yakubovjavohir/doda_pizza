import { Inject, Injectable } from '@nestjs/common';
import { CreateTTDto } from './dto/create-t-t.dto';
import { ITTService } from './interface/t-t.service';
import { PRODUCT_SERVICE_TT_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TTService {
  private ttService: ITTService;
  constructor(
    @Inject(PRODUCT_SERVICE_TT_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.ttService = this.client.getService<ITTService>('TTService');
  }
  create(dto: CreateTTDto) {
    return this.ttService.Create(dto);
  }

  async findAll() {
  const result = await lastValueFrom(this.ttService.FindAll({}));
  console.log(result);
  
  return {
    meta: result.meta,
    data: result.data.map((element) => ({
      id: element.id,
      size: element.size,
      sm:element.sm,
      weight:element.weight,
      price:element.price,
      pizza:element.pizza,
      url:element.imageUrl,
      facts:element.facts,
      createAt: element.createAt,
      updateAt: element.updateAt,
    })),
  };
  }

  async findOne(id:ID){
    const result = await lastValueFrom(this.ttService.FindOne({id}));
    return {
    meta: result.meta,
    data:{
      id: result.data.id,
      size: result.data.size,
      sm:result.data.sm,
      weight:result.data.weight,
      price:result.data.price,
      pizza:result.data.pizza,
      url:result.data.imageUrl,
      fact:result.data.facts,
      createAt: result.data.createAt,
      updateAt: result.data.updateAt,
    }
  };
  }
}
