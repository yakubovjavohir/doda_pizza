import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { CreateSnackDto } from './dto/create-snack.dto';


@Controller('snacks')
export class SnacksController {
  imageUrl: string[] = [];

  constructor(private readonly snacksService: SnacksService) {}

  @Post()
  create(@Body() dto: CreateSnackDto) {
    const changeData = {
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixed__price,
      disavailabletoppings: dto.dis_available_toppings?.map(String) || [],
      vegetarian:dto.vegetarian || false,
      pepper:dto.pepper || false,
      price:dto.price,
      imageUrl:dto.imageUrl,
      location:"fergana"
    }
    return this.snacksService.create(changeData);
  }

  @Get()
  findAll() {
    return this.snacksService.findAll();
  }
}
