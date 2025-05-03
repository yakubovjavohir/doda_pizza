import { Module } from '@nestjs/common';
import { SsbService } from './ssb.service';
import { SsbController } from './ssb.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SSBEntity } from './entities/ssb.entity';
import { SSBRepository } from './ssb.repository';

@Module({
  imports:[ TypeOrmModule.forFeature([SSBEntity])],
  controllers: [SsbController],
  providers: [
    {provide:"ISSBService", useClass:SsbService},
    {provide:"ISSBRepository", useClass:SSBRepository},
  ],
})
export class SsbModule {}
