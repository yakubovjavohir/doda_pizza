import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';
import { CreateBreakfastDto } from './dto/create-breakfast.dto';
import { ID } from 'src/common/TYPES';


@Controller('breakfast')
export class BreakfastController {
  constructor(
    private readonly breakfastService: BreakfastService,
  ) {}

  @Post()
  async create(@Body() dto: CreateBreakfastDto) {
    return this.breakfastService.create(dto);
  }

  @Get()
  findAll() {
    return this.breakfastService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.breakfastService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.breakfastService.remove(id);
  }
}
