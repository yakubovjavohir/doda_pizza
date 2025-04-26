import { Inject, Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { IBotService } from './interface/bot.service';
import { BOT_SERVICE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class BotService {
  private botService: IBotService
  constructor(
    @Inject(BOT_SERVICE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.botService = this.client.getService<IBotService>('BotService');
  }
  create(dto: CreateBotDto) {
    return this.botService.Code({...dto})
  }
}
