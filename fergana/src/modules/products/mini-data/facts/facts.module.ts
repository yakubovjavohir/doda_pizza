import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactsEntity } from './entities/fact.entity';
import { TTModule } from '../t-t/t-t.module';
import { FactsController } from './facts.controller';
import { FactsService } from './facts.service';
import { FactRepository } from './facts.repository';


@Module({
  imports: [TypeOrmModule.forFeature([FactsEntity]), TTModule],
  controllers: [FactsController],
  providers: [
    {provide: 'IFactService', useClass: FactsService},
    {provide: 'IFactRepository', useClass: FactRepository},
  ],
  exports: [
    {provide: 'IFactService', useClass: FactsService}
  ],
})
export class FactsModule {}
