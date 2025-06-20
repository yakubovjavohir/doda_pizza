import { Test, TestingModule } from '@nestjs/testing';
import { BreakfastService } from './breakfast.service';

describe('BreakfastService', () => {
  let service: BreakfastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreakfastService],
    }).compile();

    service = module.get<BreakfastService>(BreakfastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
