import { forwardRef, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_VOLUMES_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';
import { VolumesController } from './volumes.controller';
import { VolumesService } from './volumes.service';
import { IdValidationModule } from '../../id-validation/id-validation.module';


@Module({
  imports: [
    ClientsModule.register([
          {
            name: PRODUCT_SERVICE_VOLUMES_MODULE,
            transport: Transport.GRPC,
            options: {
              package: 'volume',
              protoPath: join(__dirname, '../../../../../protos/volume.proto'),
              url:"localhost:7004"
            },
          },
        ]),
        forwardRef(() => IdValidationModule)
      ],
  controllers: [VolumesController],
  providers: [VolumesService],
  exports:[VolumesService]
})
export class VolumesModule {}
