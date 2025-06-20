import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_SAUCES_MODULE } from 'src/common/config/service.name';
import { SaucesController } from './sauces.controller';
import { SaucesService } from './sauces.service';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_SAUCES_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'sauces',
            protoPath: join(__dirname, '../../../../protos/sauces.proto'),
            url:"localhost:7004"
          },
        },
      ]),],
  controllers: [SaucesController],
  providers: [SaucesService],
  exports: [SaucesService],
})
export class SaucesModule {}
