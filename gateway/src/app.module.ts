import { Module } from '@nestjs/common';
import { ToppingsModule } from './services/fergana/products/toppings/toppings.module';
import { PizzaModule } from './services/fergana/products/pizza/pizza.module';
import { staticModule } from './common/config/uploads';
import { SnacksModule } from './services/fergana/products/snacks/snacks.module';
import { AuthModule } from './services/auth/auth.module';
import { MenuModule } from './services/fergana/menu/menu.module';
import { DessertModule } from './services/fergana/products/dessert/dessert.module';
import { TTModule } from './services/fergana/products/mini-data/t-t/t-t.module';
import { DrinksModule } from './services/fergana/products/drinks/drinks.module';
import { PricesModule } from './services/fergana/products/mini-data/prices/prices.module';
import { FactModule } from './services/fergana/products/mini-data/fact/fact.module';
import { OrderModule } from './services/order/order.module';
import { VolumesModule } from './services/fergana/products/mini-data/volumes/volumes.module';
import { CoffeeModule } from './services/fergana/products/coffee/coffee.module';
import { SaucesModule } from './services/fergana/products/sauces/sauces.module';
import { MilkshakesModule } from './services/fergana/products/milkshakes/milkshakes.module';
import { BreakfastModule } from './services/fergana/products/breakfast/breakfast.module';
import { KidsFaveModule } from './services/fergana/products/kids-fave/kids-fave.module';
import { IdValidationModule } from './services/fergana/products/id-validation/id-validation.module';

@Module({
  imports: [
    staticModule,
    AuthModule,
    ToppingsModule,
    PizzaModule,
    SnacksModule,
    MenuModule,
    DessertModule,
    TTModule,
    DrinksModule,
    OrderModule,
    PricesModule,
    FactModule,
    VolumesModule,
    CoffeeModule,
    SaucesModule,
    MilkshakesModule,
    BreakfastModule,
    KidsFaveModule,
    IdValidationModule,
  ],
})
export class AppModule {}
