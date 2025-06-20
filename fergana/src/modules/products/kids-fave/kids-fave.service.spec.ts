import { Test, TestingModule } from '@nestjs/testing';
import { KidsFaveService } from './kids-fave.service';

describe('KidsFaveService', () => {
  let service: KidsFaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KidsFaveService],
    }).compile();

    service = module.get<KidsFaveService>(KidsFaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
