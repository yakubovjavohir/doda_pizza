import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TTService } from './t-t.service';
import { CreateTTDto } from './dto/create-t-t.dto';
import { ID } from 'src/common/TYPES';

@Controller('t-t')
export class TTController {
  constructor(private readonly tTService: TTService) {}

  @Post()
  create(@Body() dto: CreateTTDto) {
    return this.tTService.create(dto);
  }

  @Get()
  findAll() {
    return this.tTService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:ID){
    return this.tTService.findOne(id)
  }
}
