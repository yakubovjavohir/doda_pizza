import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BOT_SERVICE } from 'src/common/config/service.name';
import { join } from 'node:path';
import { ProfileModule } from '../profile/profile.module';

@Module({

  imports: [
    ClientsModule.register([
      {
        name: BOT_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'bot',
          protoPath: join(__dirname, '../../protos/bot.proto'),
          url:"localhost:7005"
        },
      },
    ]),
    ProfileModule
  ],
  controllers: [BotController],
  providers: [BotService],
})
export class BotModule {}
