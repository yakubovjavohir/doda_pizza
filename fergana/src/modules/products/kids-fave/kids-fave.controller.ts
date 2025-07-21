import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { KidsFaveService } from './kids-fave.service';
import { KidsFaveEntity } from './entities/kids-fave.entity';
import { ID } from 'src/common/types';
import { PizzaService } from '../pizza/pizza.service';
import { DrinksService } from '../drinks/drinks.service';
import { CoffeeService } from '../coffee/coffee.service';
import { SaucesService } from '../sauces/sauces.service';
import { BreakfastService } from '../breakfast/breakfast.service';
import { SnacksService } from '../snacks/snacks.service';
import { DessertService } from '../dessert/dessert.service';

@Controller()
export class KidsFaveController {
  constructor(
    @Inject('IKidsFaveService')
    private readonly kidsFaveService: KidsFaveService,
    @Inject('IPizzaService')
    private readonly pizzaService: PizzaService,
    @Inject('IDessertService')
    private readonly dessertService: DessertService,
    @Inject('IDrinkService')
    private readonly drinkService: DrinksService,
    @Inject('ICoffeeService')
    private readonly coffeService: CoffeeService,
    @Inject('ISaucesService')
    private readonly saucesService: SaucesService,
    @Inject('IBreakfastService')
    private readonly breakfastService: BreakfastService,
    @Inject('ISnacksService')
    private readonly snackService: SnacksService,
  ) {}

  @GrpcMethod('KidsFaveService', 'Create')
  async create(dto: KidsFaveEntity) {
    let product = {}
    if(dto.type === "pizza"){
      product = await this.pizzaService.findOne(dto.product)
    }
    if(dto.type === "snack"){
      product = await this.snackService.findOne(dto.product)
    }
    if(dto.type === "dessert"){
      product = await this.dessertService.findOne(dto.product)
    }
    if(dto.type === "sauces"){
      product = await this.saucesService.findOne(dto.product)
    }
    if(dto.type === "drink"){
      product = await this.drinkService.findOne(dto.product)
    }
    if(dto.type === "coffee"){
      product = await this.coffeService.findOne(dto.product)
    }
    if(dto.type === "breakfast"){
      product = await this.breakfastService.findOne(dto.product)
    }
    const changeData = {
      type: dto.type,
      spicy: dto.spicy,
      kidsFriendly: dto.kidsFriendly,
      recommendedAge: dto.recommendedAge,
      product: product,
      location: dto.location
    } as KidsFaveEntity
    return this.kidsFaveService.create(changeData);
  }

  @GrpcMethod('KidsFaveService', 'FindAll')
  findAll() {
    return this.kidsFaveService.findAll();
  }

  @GrpcMethod('KidsFaveService', 'FindById')
  findOne(dto: { id: ID }) {
    return this.kidsFaveService.findOne(dto.id);
  }

  @GrpcMethod('KidsFaveService', 'Delete')
  remove(dto: { id: ID }) {
    return this.kidsFaveService.delete(dto.id);
  }
}
