import { Test, TestingModule } from '@nestjs/testing';
import { IdValidationService } from './id-validation.service';

describe('IdValidationService', () => {
  let service: IdValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdValidationService],
    }).compile();

    service = module.get<IdValidationService>(IdValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
