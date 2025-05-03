import { Module } from '@nestjs/common';
import { PcService } from './pc.service';
import { PcController } from './pc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcEntity } from './entities/pc.entity';
import { PcRepository } from './pc.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PcEntity])],
  controllers: [PcController],
  providers: [
    {provide: 'IPcService', useClass: PcService},
    {provide: 'IPcRepository', useClass: PcRepository},
  ],
})
export class PcModule {}
