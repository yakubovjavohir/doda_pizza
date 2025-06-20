import { Module } from '@nestjs/common';
import { DessertService } from './dessert.service';
import { DessertController } from './dessert.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DessertEntity } from './entities/dessert.entity';
import { DessertRepository } from './dessert.repository';
import { VolumesEntity } from '../mini-data/volumes/entities/volume.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DessertEntity, VolumesEntity])],
  controllers: [DessertController],
  providers: [
    { provide: 'IDessertService', useClass: DessertService },
    { provide: 'IDessertRepository', useClass: DessertRepository },
  ],
  exports:[
    {provide: 'IDessertService', useClass: DessertService}
  ]
})
export class DessertModule {}
