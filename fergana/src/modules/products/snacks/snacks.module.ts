import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnacksController } from './snacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnackEntity } from './entities/snack.entity';
import { SnacksRepository } from './snacks.repository';
import { VolumesEntity } from '../mini-data/volumes/entities/volume.entity';
import { ToppingsModule } from '../toppings/toppings.module';

@Module({
  imports: [TypeOrmModule.forFeature([SnackEntity, VolumesEntity]), ToppingsModule],
  controllers: [SnacksController],
  providers: [
    {provide: 'ISnacksService', useClass: SnacksService},
    {provide: 'ISnacksRepository', useClass: SnacksRepository},
  ],
  exports: [
    {provide: 'ISnacksService', useClass: SnacksService}
  ]
})
export class SnacksModule {}
