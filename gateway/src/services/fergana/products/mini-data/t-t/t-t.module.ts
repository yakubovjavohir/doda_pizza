import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_TT_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';
import { TTController } from './t-t.controller';
import { TTService } from './t-t.service';

@Module({
  imports: [
    ClientsModule.register([
          {
            name: PRODUCT_SERVICE_TT_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'tt',
              protoPath: join(__dirname, '../../../../../protos/t-t.proto'),
              url:"localhost:7004",
            // url:"fergana:7004"

            },
          },
        ])],
  controllers: [TTController],
  providers: [TTService],
  exports:[TTService]
})
export class TTModule {}
