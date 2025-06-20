import { Test, TestingModule } from '@nestjs/testing';
import { DessertController } from './dessert.controller';
import { DessertService } from './dessert.service';

describe('DessertController', () => {
  let controller: DessertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DessertController],
      providers: [DessertService],
    }).compile();

    controller = module.get<DessertController>(DessertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
