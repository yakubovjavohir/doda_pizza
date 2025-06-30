import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE_ORDER_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ProfileModule } from '../profile/profile.module';
import { IdValidationModule } from '../fergana/products/id-validation/id-validation.module';
import { ToppingsModule } from '../fergana/products/toppings/toppings.module';
import { VolumesModule } from '../fergana/products/mini-data/volumes/volumes.module';
import { TTModule } from '../fergana/products/mini-data/t-t/t-t.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE_ORDER_MODULE,
        transport: Transport.GRPC,
        options: {
          package: 'order',
          protoPath: join(__dirname, '../../protos/order.proto'),
          url:"localhost:7003",
            // url:"order:7003"
        },
      },
    ]),
    ProfileModule,
    IdValidationModule,
    ToppingsModule,
    VolumesModule,
    TTModule
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports:[OrderService]
})
export class OrderModule {}
