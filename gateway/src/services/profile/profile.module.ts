import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/config/service.name';
import { join } from 'node:path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PROFILE_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'profile',
          protoPath: join(__dirname, '../../protos/profile.proto'),
          url:"localhost:7001"
        },
      },
    ]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports:[ProfileService]
})
export class ProfileModule {}
