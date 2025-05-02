import { Module } from '@nestjs/common';
import { databasePravader } from './common/config/database.pravayder';
import { ToppingsModule } from './modules/products/toppings/toppings.module';
import { PizzaModule } from './modules/products/pizza/pizza.module';

@Module({
  imports: [databasePravader, ToppingsModule, PizzaModule],
})
export class AppModule {}
