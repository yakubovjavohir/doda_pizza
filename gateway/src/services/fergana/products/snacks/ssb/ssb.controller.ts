import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SsbService } from './ssb.service';
import { CreateSsbDto } from './dto/create-ssb.dto';

@Controller('ssb')
export class SsbController {
  constructor(private readonly ssbService: SsbService) {}

  @Post()
  create(@Body() dto: CreateSsbDto) {
    return this.ssbService.create(dto);
  }

  @Get()
  findAll() {
    return this.ssbService.findAll();
  }
}
