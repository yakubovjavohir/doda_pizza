import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { CreateSnackDto } from './dto/create-snack.dto';

@Controller('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

  @Post()
  create(@Body() createSnackDto: CreateSnackDto) {
    return this.snacksService.create(createSnackDto);
  }

  @Get()
  findAll() {
    return this.snacksService.findAll();
  }
}
