import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { ProfileService } from '../profile/profile.service';
import { lastValueFrom } from 'rxjs';
import { JwtAuthGuard } from 'src/common/guard/jwt.guard';

@Controller('bot')
export class BotController {
  constructor(
    private readonly botService: BotService,
    private readonly profileService: ProfileService
  ) {}

  @Post()
  async create(@Body() code: CreateBotDto) {
    const data = await this.botService.create(code);
    let dto = {}
    let phone = ""
    await data.forEach((el)=>{
      dto = el,
      phone = el.phone
    })
    const profile = await lastValueFrom(await this.profileService.create(phone));
    const fullDto = {
      profile:{
        ...profile
      },
      access:{
        ...dto
      }
    }
    console.log(fullDto);
    
    return fullDto
    
  }
}
