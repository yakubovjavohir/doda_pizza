import { Inject, Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { IPricesService } from './interface/prices.service';
import { ClientGrpc } from '@nestjs/microservices';
import { PRODUCT_SERVICE_PRICES_MODULE } from 'src/common/config/service.name';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PricesService {
  private pricesService: IPricesService;
  constructor(
    @Inject(PRODUCT_SERVICE_PRICES_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.pricesService = this.client.getService<IPricesService>('PricesService');
  }
  create(dto: CreatePriceDto) {
    const data = {
      size: dto.size,
      price: dto.price,
      topping: dto.topping,
    }
    return this.pricesService.Create(data);
  }
  
  findAll() {
    return this.pricesService.FindAll({});
  }

  async findOne(id:ID){
    return await lastValueFrom(this.pricesService.FindOne({id}))
  }
}
