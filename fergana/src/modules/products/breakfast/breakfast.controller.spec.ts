import { Test, TestingModule } from '@nestjs/testing';
import { BreakfastController } from './breakfast.controller';
import { BreakfastService } from './breakfast.service';

describe('BreakfastController', () => {
  let controller: BreakfastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreakfastController],
      providers: [BreakfastService],
    }).compile();

    controller = module.get<BreakfastController>(BreakfastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
