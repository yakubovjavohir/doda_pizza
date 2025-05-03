import { Test, TestingModule } from '@nestjs/testing';
import { SsbController } from './ssb.controller';
import { SsbService } from './ssb.service';

describe('SsbController', () => {
  let controller: SsbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsbController],
      providers: [SsbService],
    }).compile();

    controller = module.get<SsbController>(SsbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
