import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_FACT_MODULE } from 'src/common/config/service.name';
import { FactController } from './fact.controller';
import { FactService } from './fact.service';

@Module({
  imports: [
        ClientsModule.register([
          {
            name: PRODUCT_SERVICE_FACT_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'fact',
              protoPath: join(__dirname, '../../../../../protos/fact.proto'),
              url:"localhost:7004"
            },
          },
        ])
  ],
  controllers: [FactController],
  providers: [FactService],
  exports:[FactService]
})
export class FactModule {}
