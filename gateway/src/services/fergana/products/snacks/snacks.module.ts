import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnacksController } from './snacks.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_SNACKS_MODULE } from 'src/common/config/service.name';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_SNACKS_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'snack',
            protoPath: join(__dirname, '../../../../protos/snack.proto'),
            // url:"localhost:7004",
            url:"fergana:7004"
          },
        },
      ])],
  controllers: [SnacksController],
  providers: [SnacksService],
  exports: [SnacksService],
})
export class SnacksModule {}
