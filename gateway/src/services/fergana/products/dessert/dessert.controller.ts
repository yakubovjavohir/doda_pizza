import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DessertService } from './dessert.service';
import { CreateDessertDto } from './dto/create-dessert.dto';
import { ID } from 'src/common/TYPES';

@Controller('dessert')
export class DessertController {
  constructor(private readonly dessertService: DessertService) {}

  @Post()
  create(@Body() dto: CreateDessertDto) {
    const changeData = {
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixed__price,
      disavailabletoppings: dto.dis_available_toppings?.map(String) || [],
      vegetarian:dto.vegetarian || false,
      imageUrl:dto.imageUrl,
      price: dto.price,
    }
    return this.dessertService.create(changeData);
  }

  @Get()
  findAll() {
    return this.dessertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.dessertService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.dessertService.delete(id);
  }
}
