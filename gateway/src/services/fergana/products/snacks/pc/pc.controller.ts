import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcService } from './pc.service';
import { CreatePcDto } from './dto/create-pc.dto';

@Controller('pc')
export class PcController {
  constructor(private readonly pcService: PcService) {}

  @Post()
  create(@Body() dto: CreatePcDto) {
    return this.pcService.create(dto);
  }

  @Get()
  findAll() {
    return this.pcService.findAll();
  }
}
