import { Inject, Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { IPizzaService } from './interface/pizza.service';
import { PRODUCT_SERVICE_PIZZA_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { ID } from 'src/common/TYPES';

@Injectable()
export class PizzaService {
  private pizzaService: IPizzaService;
  constructor(
    @Inject(PRODUCT_SERVICE_PIZZA_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.pizzaService = this.client.getService<IPizzaService>('PizzaService');
  }
  create(dto: CreatePizzaDto) {
    const data = this.pizzaService.Create(dto);
    return data
  }

  findAll() {
    return this.pizzaService.FindAll({});
  }

  findOne(id: ID) {
    return this.pizzaService.FindOne({id});
  }

  remove(id: ID) {
    return this.pizzaService.Delete({id});
  }
}
