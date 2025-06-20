import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KidsFaveEntity } from './entities/kids-fave.entity';
import { ID } from 'src/common/types';
import { IKidsFaveRepository } from './interface/kids-fave.repository';

@Injectable()
export class KidsFaveRepository implements IKidsFaveRepository {
  constructor(
    @InjectRepository(KidsFaveEntity)
    private readonly repository: Repository<KidsFaveEntity>,
  ) {}
    async findOne(id: ID): Promise<KidsFaveEntity | null> {
        return await this.repository.findOne({ where: { id } });
    }

  async create(data: Partial<KidsFaveEntity>): Promise<KidsFaveEntity> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findAll(): Promise<KidsFaveEntity[]> {
    return await this.repository.find();
  }

  async delete(id: ID): Promise<void> {
    await this.repository.delete(id);
  }
} 