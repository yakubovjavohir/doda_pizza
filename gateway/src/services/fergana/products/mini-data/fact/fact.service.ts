import { Inject, Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { IFactService } from './interface/fact.service';
import { ClientGrpc } from '@nestjs/microservices';
import { PRODUCT_SERVICE_FACT_MODULE } from 'src/common/config/service.name';

@Injectable()
export class FactService {
  private factService: IFactService;
  constructor(
    @Inject(PRODUCT_SERVICE_FACT_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.factService = this.client.getService<IFactService>('FactService');
  }
  create(dto: CreateFactDto) {
    const data = {
      calories: dto.calories,
      protein: dto.protein,
      fat: dto.fat,
      carbohydrate: dto.carbohydrate,
      tt: dto.tt,
    }
    return this.factService.Create(data);
  }
  
  findAll() {
    return this.factService.FindAll({});
  }
}
