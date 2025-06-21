import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_PRICES_MODULE } from 'src/common/config/service.name';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';

@Module({
  imports: [
        ClientsModule.register([
          {
            name: PRODUCT_SERVICE_PRICES_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'prices',
              protoPath: join(__dirname, '../../../../../protos/prices.proto'),
              url:"fergana:7004"
            },
          },
        ])
  ],
  controllers: [PricesController],
  providers: [PricesService],
  exports:[PricesService]
})
export class PricesModule {}
