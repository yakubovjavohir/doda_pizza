import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_DRINKS_MODULE } from 'src/common/config/service.name';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_DRINKS_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'drink',
            protoPath: join(__dirname, '../../../../protos/drink.proto'),
            url:"fergana:7004"
          },
        },
      ]),],
  controllers: [DrinksController],
  providers: [DrinksService],
  exports: [DrinksService],
})
export class DrinksModule {}
