import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';

@Module({
  controllers: [BotController],
  providers: [
    {provide:"IBotService", useClass:BotService}
  ],
})
export class BotModule {}
