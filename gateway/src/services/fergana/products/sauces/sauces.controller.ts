import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaucesService } from './sauces.service';
import { ID } from 'src/common/TYPES';
import { CreateSaucesDto } from './dto/create-sauce.dto';

@Controller('sauces')
export class SaucesController {
  constructor(private readonly saucesService: SaucesService) {}

  @Post()
  create(@Body() createSauceDto: CreateSaucesDto) {
    const dto = {
      ...createSauceDto,
      location:"fergana"
    }
    return this.saucesService.create(createSauceDto);
  }

  @Get()
  findAll() {
    return this.saucesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.saucesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.saucesService.remove(id);
  }
}
