import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { BotService } from './bot.service';

@Controller()
export class BotController {
  constructor(
    @Inject("IBotService")
    private readonly botService: BotService
  ) {}

  @GrpcMethod('BotService', "Code")
  create({code}){
    return this.botService.code(code);
  }
}
