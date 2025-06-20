import { Inject, Injectable } from '@nestjs/common';
import { KidsFaveRepository } from './kids-fave.repository';
import { KidsFaveEntity } from './entities/kids-fave.entity';
import { ResData } from 'src/lib/resdata';
import { NotFoundProduct } from 'src/lib/allModule.errors';
import { ID } from 'src/common/types';
import { IKidsFaveService } from './interface/kids-fave.service';

@Injectable()
export class KidsFaveService implements IKidsFaveService {
  @Inject("IKidsFaveRepository")
  private readonly kidsFaveRepository: KidsFaveRepository;

  async create(dto: KidsFaveEntity): Promise<ResData<KidsFaveEntity>> {
    const data = await this.kidsFaveRepository.create(dto);
    const resdata = new ResData<KidsFaveEntity>(201, "created kids favorite item", data);
    return resdata;
  }

  async findAll(): Promise<ResData<KidsFaveEntity[]>> {
    const data = await this.kidsFaveRepository.findAll();
    const resdata = new ResData<KidsFaveEntity[]>(200, "success", data);
    return resdata;
  }

  async findOne(id: ID): Promise<ResData<KidsFaveEntity>> {
    const data = await this.kidsFaveRepository.findOne(id);
    if (!data) {
      throw new NotFoundProduct();
    }
    const resdata = new ResData<KidsFaveEntity>(200, "success", data);
    return resdata;
  }

  async delete(id: ID): Promise<ResData<null>> {
    await this.findOne(id);
    await this.kidsFaveRepository.delete(id);
    const resdata = new ResData<null>(200, "deleted kids favorite item", null);
    return resdata;
  }
}
