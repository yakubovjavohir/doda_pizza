import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KidsFaveService } from './kids-fave.service';
import { CreateKidsFaveDto } from './dto/create-kids-fave.dto';
import { ID } from 'src/common/TYPES';

@Controller('kids-fave')
export class KidsFaveController {
  constructor(private readonly kidsFaveService: KidsFaveService) {}

  @Post()
  create(@Body() createKidsFaveDto: CreateKidsFaveDto) {
    return this.kidsFaveService.create(createKidsFaveDto);
  }

  @Get()
  findAll() {
    return this.kidsFaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.kidsFaveService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.kidsFaveService.remove(id);
  }
}
