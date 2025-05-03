import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnacksController } from './snacks.controller';
import { SsbModule } from './ssb/ssb.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnackEntity } from './entities/snack.entity';
import { SnacksRepository } from './snacks.repository';
import { PcModule } from './pc/pc.module';

@Module({
  imports: [SsbModule, TypeOrmModule.forFeature([SnackEntity]), PcModule],
  controllers: [SnacksController],
  providers: [
    {provide: 'ISnacksService', useClass: SnacksService},
    {provide: 'ISnacksRepository', useClass: SnacksRepository},
  ],
})
export class SnacksModule {}
