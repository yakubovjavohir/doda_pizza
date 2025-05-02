import { Inject, Injectable } from '@nestjs/common';
import { CreateToppingDto } from './dto/create-topping.dto';
import { IToppingService } from './interface/toppings.service';
import { PRODUCT_SERVICE_TOPPING_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ToppingsService {
  private toppingService: IToppingService
  constructor(
    @Inject(PRODUCT_SERVICE_TOPPING_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.toppingService = this.client.getService<IToppingService>('ToppingService');
  }
  create(dto: CreateToppingDto) {
    return this.toppingService.Create(dto)
  }

  findAll() {
    return this.toppingService.FindAll({})
  }
}
