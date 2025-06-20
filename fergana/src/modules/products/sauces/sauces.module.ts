import { Module } from '@nestjs/common';
import { SaucesService } from './sauces.service';
import { SaucesController } from './sauces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaucesEntity } from './entities/sauce.entity';
import { SaucesRepository } from './sauces.repository';

@Module({
  imports:[TypeOrmModule.forFeature([SaucesEntity])],
  controllers: [SaucesController],
  providers: [
    {provide:'ISaucesService', useClass:SaucesService},
    {provide:'ISaucesRepository', useClass:SaucesRepository}
  ],
  exports:[
    {provide:'ISaucesService', useClass:SaucesService}
  ]
})
export class SaucesModule {}
