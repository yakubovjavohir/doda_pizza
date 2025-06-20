import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KidsFaveController } from './kids-fave.controller';
import { KidsFaveService } from './kids-fave.service';
import { KidsFaveEntity } from './entities/kids-fave.entity';
import { KidsFaveRepository } from './kids-fave.repository';
import { SnacksModule } from '../snacks/snacks.module';
import { PizzaModule } from '../pizza/pizza.module';
import { DessertModule } from '../dessert/dessert.module';
import { DrinksModule } from '../drinks/drinks.module';
import { CoffeeModule } from '../coffee/coffee.module';
import { BreakfastModule } from '../breakfast/breakfast.module';
import { SaucesModule } from '../sauces/sauces.module';

@Module({
  imports: [TypeOrmModule.forFeature([KidsFaveEntity]), SnacksModule, PizzaModule, DessertModule, DrinksModule, CoffeeModule, BreakfastModule, SaucesModule],
  controllers: [KidsFaveController],
  providers: [
    { provide: 'IKidsFaveService', useClass: KidsFaveService },
    { provide: 'IKidsFaveRepository', useClass: KidsFaveRepository }
  ],
})
export class KidsFaveModule {}
