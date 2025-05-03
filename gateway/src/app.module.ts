import { Module } from '@nestjs/common';
import { BotModule } from './services/bot/bot.module';
import { ProfileModule } from './services/profile/profile.module';
import { AuthModule } from './services/auth/auth.module';
import { ToppingsModule } from './services/fergana/products/toppings/toppings.module';
import { PizzaModule } from './services/fergana/products/pizza/pizza.module';
import { staticModule } from './common/config/uploads';
import { SnacksModule } from './services/fergana/products/snacks/snacks.module';

@Module({
  imports: [staticModule, BotModule, ProfileModule, AuthModule, ToppingsModule, PizzaModule, SnacksModule],
})
export class AppModule {}
