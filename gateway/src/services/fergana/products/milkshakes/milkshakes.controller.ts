import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MilkshakesService } from './milkshakes.service';
import { CreateMilkshakesDto } from './dto/create-milkshake.dto';

@Controller('milkshakes')
export class MilkshakesController {
  constructor(private readonly milkshakesService: MilkshakesService) {}

  @Post()
  create(@Body() createMilkshakeDto: CreateMilkshakesDto) {
    return this.milkshakesService.create(createMilkshakeDto);
  }

  @Get()
  findAll() {
    return this.milkshakesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milkshakesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milkshakesService.remove(+id);
  }
}
