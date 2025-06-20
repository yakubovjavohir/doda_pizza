import { Module } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';
import { BreakfastController } from './breakfast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreakfastEntity } from './entities/breakfast.entity';
import { BreakfastRepository } from './breakfast.repository';

@Module({
  imports:[TypeOrmModule.forFeature([BreakfastEntity])],
  controllers: [BreakfastController],
  providers: [
    {provide:'IBreakfastService', useClass:BreakfastService},
    {provide:'IBreakfastRepository', useClass:BreakfastRepository}
  ],
  exports:[
    {provide:'IBreakfastService', useClass:BreakfastService}
  ]
})
export class BreakfastModule {}
