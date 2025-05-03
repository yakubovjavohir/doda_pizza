import { Module } from '@nestjs/common';
import { databasePravader } from './common/config/database.pravayder';
import { ToppingsModule } from './modules/products/toppings/toppings.module';
import { PizzaModule } from './modules/products/pizza/pizza.module';
import { SnacksModule } from './modules/products/snacks/snacks.module';
import { SsbModule } from './modules/products/snacks/ssb/ssb.module';

@Module({
  imports: [databasePravader, ToppingsModule, PizzaModule, SnacksModule, SsbModule],
})
export class AppModule {}
