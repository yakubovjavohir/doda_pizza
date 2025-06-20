import { Test, TestingModule } from '@nestjs/testing';
import { KidsFaveController } from './kids-fave.controller';
import { KidsFaveService } from './kids-fave.service';

describe('KidsFaveController', () => {
  let controller: KidsFaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KidsFaveController],
      providers: [KidsFaveService],
    }).compile();

    controller = module.get<KidsFaveController>(KidsFaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
