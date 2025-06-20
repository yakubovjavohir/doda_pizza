import { Module } from '@nestjs/common';
import { VolumesService } from './volumes.service';
import { VolumesController } from './volumes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolumesEntity } from './entities/volume.entity';
import { VolumesRepository } from './volumes.repository';

@Module({
  imports:[TypeOrmModule.forFeature([VolumesEntity])],
  controllers: [VolumesController],
  providers: [
    {provide:'IVolumesService', useClass:VolumesService},
    {provide:'IVolumesRepository', useClass:VolumesRepository}
  ],
})
export class VolumesModule {}
