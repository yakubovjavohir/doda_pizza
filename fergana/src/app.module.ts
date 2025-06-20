import { Module } from '@nestjs/common';
import { databasePravader } from './common/config/database.pravayder';
import { ToppingsModule } from './modules/products/toppings/toppings.module';
import { PizzaModule } from './modules/products/pizza/pizza.module';
import { SnacksModule } from './modules/products/snacks/snacks.module';
import { DessertModule } from './modules/products/dessert/dessert.module';
import { TTModule } from './modules/products/mini-data/t-t/t-t.module';
import { DrinksModule } from './modules/products/drinks/drinks.module';
import { PricesModule } from './modules/products/mini-data/prices/prices.module';
import { FactsModule } from './modules/products/mini-data/facts/facts.module';
import { VolumesModule } from './modules/products/mini-data/volumes/volumes.module';
import { CoffeeModule } from './modules/products/coffee/coffee.module';
import { SaucesModule } from './modules/products/sauces/sauces.module';
import { MilkshakesModule } from './modules/products/milkshakes/milkshakes.module';
import { BreakfastModule } from './modules/products/breakfast/breakfast.module';
import { KidsFaveModule } from './modules/products/kids-fave/kids-fave.module';

@Module({
  imports: [
    databasePravader, 
    ToppingsModule, 
    PizzaModule, 
    SnacksModule, 
    DessertModule, 
    TTModule, 
    DrinksModule, 
    PricesModule, 
    FactsModule, 
    VolumesModule, 
    CoffeeModule, 
    SaucesModule, 
    MilkshakesModule, 
    BreakfastModule,
    KidsFaveModule
  ],
})
export class AppModule {}
