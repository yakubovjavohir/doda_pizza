import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactService } from './fact.service';
import { CreateFactDto } from './dto/create-fact.dto';

@Controller('fact')
export class FactController {
  constructor(private readonly factService: FactService) {}

  @Post()
  create(@Body() dto: CreateFactDto) {
    return this.factService.create(dto);
  }

  @Get()
  findAll() {
    return this.factService.findAll();
  }
}
