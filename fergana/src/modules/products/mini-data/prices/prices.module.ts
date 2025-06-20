import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnacksModule } from '../../snacks/snacks.module';
import { DessertModule } from '../../dessert/dessert.module';
import { PricesEntity } from './entities/price.entity';
import { ToppingsModule } from '../../toppings/toppings.module';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { PricesRepository } from './prices.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PricesEntity]), ToppingsModule],
  controllers: [PricesController],
  providers: [
    {provide: 'IPricesService', useClass: PricesService},
    {provide: 'IPricesRepository', useClass: PricesRepository},
  ],
  exports: [
    {provide: 'IPricesService', useClass: PricesService}
  ],
})
export class PricesModule {}
