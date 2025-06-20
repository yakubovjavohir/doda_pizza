import { Test, TestingModule } from '@nestjs/testing';
import { DessertService } from './dessert.service';

describe('DessertService', () => {
  let service: DessertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DessertService],
    }).compile();

    service = module.get<DessertService>(DessertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
