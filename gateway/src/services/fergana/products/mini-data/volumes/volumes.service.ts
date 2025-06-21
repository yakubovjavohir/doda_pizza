import { Inject, Injectable } from '@nestjs/common';
import { IVolumesService } from './interface/volumes.service';
import { PRODUCT_SERVICE_VOLUMES_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateVolumesDto } from './dto/create-volume.dto';
import { ID } from 'src/common/TYPES';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class VolumesService {
  private volumeService: IVolumesService;
  constructor(
    @Inject(PRODUCT_SERVICE_VOLUMES_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.volumeService = this.client.getService<IVolumesService>('VolumesService');
  }
  async create(dto: CreateVolumesDto) {
    return await lastValueFrom(this.volumeService.Create(dto));
  }

  async findAll() {
    return await lastValueFrom(this.volumeService.FindAll({}))
  }

  async findOne(id:ID){
    return await lastValueFrom(this.volumeService.FindOne({id}))
  }
}
