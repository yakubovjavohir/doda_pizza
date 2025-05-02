import { Module } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { ToppingsController } from './toppings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingEntity } from './entities/topping.entity';
import { ToppingRepository } from './toppings.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ToppingEntity])],
  controllers: [ToppingsController],
  providers: [
    {provide:"IToppingRepository", useClass:ToppingRepository},
    {provide:"IToppingService", useClass:ToppingsService}
  ],
  exports:[
    {provide:"IToppingService", useClass:ToppingsService}
  ]
})
export class ToppingsModule {}
