import { Module } from '@nestjs/common';
import { PcService } from './pc.service';
import { PcController } from './pc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_PC_MODULE } from 'src/common/config/service.name';

@Module({
  imports: [
        ClientsModule.register([
          {
            name: PRODUCT_SERVICE_PC_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'pc',
              protoPath: join(__dirname, '../../../../../protos/pc.proto'),
              url:"localhost:7004"
            },
          },
        ])
  ],
  controllers: [PcController],
  providers: [PcService],
})
export class PcModule {}
