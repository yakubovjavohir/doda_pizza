import { Test, TestingModule } from '@nestjs/testing';
import { MilkshakesController } from './milkshakes.controller';
import { MilkshakesService } from './milkshakes.service';

describe('MilkshakesController', () => {
  let controller: MilkshakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilkshakesController],
      providers: [MilkshakesService],
    }).compile();

    controller = module.get<MilkshakesController>(MilkshakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
