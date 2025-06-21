import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_MILKSHAKES_MODULE } from 'src/common/config/service.name';
import { MilkshakesController } from './milkshakes.controller';
import { MilkshakesService } from './milkshakes.service';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_MILKSHAKES_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'milkshakes',
            protoPath: join(__dirname, '../../../../protos/milkshakes.proto'),
            url:"fergana:7004"
          },
        },
      ]),],
  controllers: [MilkshakesController],
  providers: [MilkshakesService],
  exports: [MilkshakesService],
})
export class MilkshakesModule {}
