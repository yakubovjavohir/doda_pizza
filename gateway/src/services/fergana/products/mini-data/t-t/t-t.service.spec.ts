import { Test, TestingModule } from '@nestjs/testing';
import { TTService } from './t-t.service';

describe('TTService', () => {
  let service: TTService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TTService],
    }).compile();

    service = module.get<TTService>(TTService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
