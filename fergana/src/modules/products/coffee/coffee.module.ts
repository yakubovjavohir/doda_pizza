import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeEntity } from './entities/coffee.entity';
import { CoffeeRepository } from './coffee.repository';
import { ToppingsModule } from '../toppings/toppings.module';

@Module({
  imports:[TypeOrmModule.forFeature([CoffeeEntity]), ToppingsModule],
  controllers: [CoffeeController],
  providers: [
    {provide:"ICoffeeRepository", useClass:CoffeeRepository},
    {provide:"ICoffeeService", useClass:CoffeeService}
  ],
  exports:[
    {provide:"ICoffeeService", useClass:CoffeeService}
  ]
})
export class CoffeeModule {}
