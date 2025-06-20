import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VolumesService } from './volumes.service';
import { ID } from 'src/common/TYPES';
import { CreateVolumesDto } from './dto/create-volume.dto';
import { IdValidationService } from '../../id-validation/id-validation.service';


@Controller('volumes')
export class VolumesController {
  constructor(
    private readonly volumesService: VolumesService,
    private readonly idExist : IdValidationService
  ) {}

  @Post()
  async create(@Body() dto:CreateVolumesDto) {
    await this.idExist.id(dto.product, dto.type)
    return this.volumesService.create(dto);
  }

  @Get()
  findAll() {
    return this.volumesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.volumesService.findOne(id);
  }
}
