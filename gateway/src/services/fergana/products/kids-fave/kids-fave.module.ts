import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_KIDS_FAVE_MODULE } from 'src/common/config/service.name';
import { KidsFaveController } from './kids-fave.controller';
import { KidsFaveService } from './kids-fave.service';

@Module({
  imports: [ClientsModule.register([
        {
          name: PRODUCT_SERVICE_KIDS_FAVE_MODULE,
          transport: Transport.GRPC,
          options: {
            package: 'kidsfave',
            protoPath: join(__dirname, '../../../../protos/kids-fave.proto'),
            url:"fergana:7004"
          },
        },
      ]),],
  controllers: [KidsFaveController],
  providers: [KidsFaveService],
  exports: [KidsFaveService],
})
export class KidsFaveModule {}
