import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnacksModule } from '../../snacks/snacks.module';
import { DessertModule } from '../../dessert/dessert.module';
import { TTEntity } from './entities/t-t.entity';
import { PizzaModule } from '../../pizza/pizza.module';
import { TTController } from './t-t.controller';
import { TTService } from './t-t.service';
import { TTRepository } from './t-t.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([TTEntity]), PizzaModule],
  controllers: [TTController],
  providers: [
    {provide:"ITTService", useClass:TTService},
    {provide:"ITTRepository", useClass:TTRepository},
  ],
})
export class TTModule {}
