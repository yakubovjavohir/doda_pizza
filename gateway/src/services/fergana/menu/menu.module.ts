import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { PizzaModule } from '../products/pizza/pizza.module';
import { SnacksModule } from '../products/snacks/snacks.module';
import { DessertModule } from '../products/dessert/dessert.module';
import { DrinksModule } from '../products/drinks/drinks.module';
import { CoffeeModule } from '../products/coffee/coffee.module';
import { MilkshakesModule } from '../products/milkshakes/milkshakes.module';
import { SaucesModule } from '../products/sauces/sauces.module';
import { BreakfastModule } from '../products/breakfast/breakfast.module';

@Module({
  imports:[PizzaModule, SnacksModule, DessertModule, DrinksModule, CoffeeModule, MilkshakesModule, SaucesModule, BreakfastModule],
  controllers: [MenuController],
})
export class MenuModule {}
