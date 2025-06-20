import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrinkEntity } from './entities/drink.entity';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';
import { DrinkRepository } from './drink.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DrinkEntity])],
  controllers: [DrinksController],
  providers: [
    { provide: 'IDrinkService', useClass: DrinksService },
    { provide: 'IDrinkRepository', useClass: DrinkRepository },
  ],
  exports:[
    {provide: 'IDrinkService', useClass: DrinksService}
  ]
})
export class DrinksModule {}
