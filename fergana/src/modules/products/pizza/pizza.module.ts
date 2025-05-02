import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaEntity } from './entities/pizza.entity';
import { ToppingsModule } from '../toppings/toppings.module';
import { PizzaRepository } from './pizza.repository';

@Module({
  imports:[TypeOrmModule.forFeature([PizzaEntity]), ToppingsModule],
  controllers: [PizzaController],
  providers: [
    {provide:"IPizzaRepository", useClass:PizzaRepository},
    {provide:"IPizzaService", useClass:PizzaService},
  ],
})
export class PizzaModule {}
