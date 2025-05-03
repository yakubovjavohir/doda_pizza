import { Test, TestingModule } from '@nestjs/testing';
import { SsbService } from './ssb.service';

describe('SsbService', () => {
  let service: SsbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SsbService],
    }).compile();

    service = module.get<SsbService>(SsbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
