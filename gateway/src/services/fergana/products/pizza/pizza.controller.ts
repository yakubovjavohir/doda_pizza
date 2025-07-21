import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { ID } from 'src/common/TYPES';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}
  @Post()
  create(@Body() dto: CreatePizzaDto) {
    const changeData = {
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixed__price,
      disavailabletoppings: dto.dis_available_toppings?.map(String) || [],
      vegetarian:dto.vegetarian || false,
      pepper:dto.pepper || false,
      imageUrl:dto.imageUrl,
      price: dto.price,
      topping:dto.topping,
    }
    return this.pizzaService.create(changeData);
  }

  @Get()
  findAll() {
    return this.pizzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.pizzaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.pizzaService.remove(id);
  }
}
