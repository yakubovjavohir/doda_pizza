import { Test, TestingModule } from '@nestjs/testing';
import { MilkshakesService } from './milkshakes.service';

describe('MilkshakesService', () => {
  let service: MilkshakesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilkshakesService],
    }).compile();

    service = module.get<MilkshakesService>(MilkshakesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
