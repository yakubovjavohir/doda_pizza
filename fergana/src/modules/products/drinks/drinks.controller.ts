import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DrinksService } from './drinks.service';
import { DrinkEntity } from './entities/drink.entity';
import { ID } from 'src/common/types';

@Controller()
export class DrinksController {
  constructor(
    @Inject('IDrinkService')
    private readonly drinksService: DrinksService
  ) {}

  @GrpcMethod('DrinkService', 'Create')
  create(dto: DrinkEntity) {
    return this.drinksService.create(dto);
  }


  @GrpcMethod('DrinkService', 'FindAll')
  findAll() {
    return this.drinksService.findAll();
  }

  @GrpcMethod('DrinkService', 'FindById')
  findOne(dto:{id: ID}) {
    return this.drinksService.findOne(dto.id);
  }

  @GrpcMethod('DrinkService', 'Delete')
  remove(dto:{id: ID}) {
    return this.drinksService.delete(dto.id);
  }
}
