import { Module } from '@nestjs/common';
import { SsbService } from './ssb.service';
import { SsbController } from './ssb.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_SSB_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';

@Module({
  imports: [
    ClientsModule.register([
          {
            name: PRODUCT_SERVICE_SSB_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'ssb',
              protoPath: join(__dirname, '../../../../../protos/ssb.proto'),
              url:"localhost:7004"
            },
          },
        ])],
  controllers: [SsbController],
  providers: [SsbService],
})
export class SsbModule {}
