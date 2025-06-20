import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_DESSERT_MODULE } from 'src/common/config/service.name';
import { DessertController } from './dessert.controller';
import { DessertService } from './dessert.service';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_DESSERT_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'dessert',
            protoPath: join(__dirname, '../../../../protos/dessert.proto'),
            url:"localhost:7004"
          },
        },
      ])],
  controllers: [DessertController],
  providers: [DessertService],
  exports: [DessertService],
})
export class DessertModule {}
