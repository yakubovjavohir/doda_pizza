import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { PizzaService } from './pizza.service';
import { PizzaEntity } from './entities/pizza.entity';
import { ID } from 'src/common/types';
import { ToppingsService } from '../toppings/toppings.service';
import { ToppingEntity } from '../toppings/entities/topping.entity';
import { IToppingPrices } from '../toppings/interface/prices';

@Controller()
export class PizzaController {
  constructor(
    @Inject("IPizzaService")
    private readonly pizzaService: PizzaService,
    @Inject("IToppingService")
    private readonly toppingService:ToppingsService
  ) {}

  @GrpcMethod('PizzaService', 'Create')
  async create(@Payload() dto: PizzaEntity) {
    const topping = await this.toppingService.findAll()


    const newData = {
      ...dto,
      toppings: topping.data,
    }
    const pizzaEntity = Object.assign(new PizzaEntity(), newData);
    return await this.pizzaService.create(pizzaEntity);
  }

  @GrpcMethod('PizzaService', 'FindAll')
  findAll() {
    return this.pizzaService.findAll();
  }

  @GrpcMethod('PizzaService', 'FindOne')
  findOne(dto: { id: ID }) {
    return this.pizzaService.findOne(dto.id);
  }

  @GrpcMethod('PizzaService', 'Delete')
  remove(dto: { id: ID }) {
    return this.pizzaService.delete(dto.id);
  }
}
