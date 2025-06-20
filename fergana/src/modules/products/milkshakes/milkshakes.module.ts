import { Module } from '@nestjs/common';
import { MilkshakesService } from './milkshakes.service';
import { MilkshakesController } from './milkshakes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilkshakesEntity } from './entities/milkshake.entity';
import { MilkshakesRepository } from './milkshakes.repository';

@Module({
  imports:[TypeOrmModule.forFeature([MilkshakesEntity])],
  controllers: [MilkshakesController],
  providers: [
    {provide:'IMilkshakesRepository', useClass:MilkshakesRepository},
    {provide:'IMilkshakesService', useClass:MilkshakesService}
  ],
})
export class MilkshakesModule {}
