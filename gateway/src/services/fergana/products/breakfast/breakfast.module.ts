import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_BREAKFAST_MODULE, PRODUCT_SERVICE_COFFEE_MODULE } from 'src/common/config/service.name';
import { BreakfastController } from './breakfast.controller';
import { BreakfastService } from './breakfast.service';


@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_BREAKFAST_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'breakfast',
            protoPath: join(__dirname, '../../../../protos/breakfast.proto'),
            url:"localhost:7004",
            // url:"fergana:7004"
          },
        },
      ]),
    ],
  controllers: [BreakfastController],
  providers: [BreakfastService],
  exports: [BreakfastService],
})
export class BreakfastModule {}
