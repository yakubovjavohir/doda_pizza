import { Inject, Injectable } from '@nestjs/common';
import { ISnacksRepository } from './interface/snacks.repository';
import { SnackEntity } from './entities/snack.entity';
import { ResData } from 'src/lib/resdata';
import { ISnacksService } from './interface/snacks.service';
import { ID } from 'src/common/types';
import { NameExist, NotFoundProduct } from 'src/lib/allModule.errors';

@Injectable()
export class SnacksService implements ISnacksService {
  constructor(
    @Inject('ISnacksRepository')
    private readonly snacksRepository: ISnacksRepository,
  ) {}
  async findOne(id: ID): Promise<ResData<SnackEntity>> {
    const data = await this.snacksRepository.findOne(id)
    if(!data){
      throw new NotFoundProduct()
    }
    const resdata = new ResData<SnackEntity>(200, "success", data)
    return resdata
  }

  

  async create(dto: SnackEntity): Promise<ResData<SnackEntity>> {
    const nameExist = await this.snacksRepository.nameExist(dto.name);
    if (nameExist) {
      throw new NameExist()
    }
    const data = await this.snacksRepository.create(dto);
    const resdata = new ResData<SnackEntity>(201, 'created', data);
    return resdata;
  }

  async findAll(): Promise<ResData<SnackEntity[]>> {
    const data = await this.snacksRepository.findAll();
    const resdata = new ResData<SnackEntity[]>(200, 'success', data);
    return resdata;
  }

}
