import { Inject, Injectable } from '@nestjs/common';
import { CreateSnackDto } from './dto/create-snack.dto';
import { ISnackService } from './interface/snack.service';
import { PRODUCT_SERVICE_SNACKS_MODULE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class SnacksService {
  private snackService: ISnackService;
  constructor(
    @Inject(PRODUCT_SERVICE_SNACKS_MODULE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.snackService = this.client.getService<ISnackService>('SnackService');
  }
  create(dto: CreateSnackDto) {
    return this.snackService.Create(dto);
  }

  findAll() {
    return this.snackService.FindAll({});
  }
}
