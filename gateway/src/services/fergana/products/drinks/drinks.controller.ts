import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { ID } from 'src/common/TYPES';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Post()
  create(@Body() dto: CreateDrinkDto) {
    const changeData = {
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixed__price,
      vegetarian:dto.vegetarian || false,
      imageUrl:dto.imageUrl,
      gaz:dto.gaz,
      price: dto.price,
    }
    return this.drinksService.create(changeData);
  }

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.drinksService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.drinksService.remove(id);
  }
}
