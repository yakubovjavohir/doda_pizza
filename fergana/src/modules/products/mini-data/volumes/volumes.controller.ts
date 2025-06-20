import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { VolumesService } from './volumes.service';
import { VolumesEntity } from './entities/volume.entity';
import { ID } from 'src/common/types';

@Controller()
export class VolumesController {
  constructor(
    @Inject('IVolumesService')
    private readonly volumesService: VolumesService
  ) {}


  @GrpcMethod('VolumesService', 'Create')
  create(dto: VolumesEntity) {
    return this.volumesService.create(dto);
  }

  @GrpcMethod('VolumesService', 'FindAll')
  findAll() {
    return this.volumesService.findAll();
  }

  @GrpcMethod('VolumesService', 'FindOne')
  findOne(dto:{id: ID}) {
    return this.volumesService.findOne(dto.id);
  }
}
